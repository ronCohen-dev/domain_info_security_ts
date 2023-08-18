'use strict';
import * as https from 'https';
import {VirusModel} from '../models/virus.model';
import {WhoisModel} from '../models/whois.model';
import {VIRUS_TOTAL_API_KEY, WHO_IS_API_KEY} from '../utils/constant.util';
import {parseVirusesTotal, parseWhoIsInfo} from '../utils/forensic.ut';
import {Error} from "sequelize";

const fetchVirusTotalInfo = async function (domain: string) {
    let options = {
        'method': 'GET',
        'hostname': 'www.virustotal.com',
        'path': `/api/v3/domains/${domain}`,
        'headers': {
            'x-apikey': VIRUS_TOTAL_API_KEY
        },
    };

    return sendRequest(options);
}

const fetchWhoIsInfo = async function (domain: string) {
    let options = {
        'method': 'GET',
        'hostname': 'www.whoisxmlapi.com',
        'path': `/whoisserver/WhoisService?domainName=${domain}&apiKey=${WHO_IS_API_KEY}&outputFormat=json`,
    };

    return sendRequest(options);
}

const sendRequest = async function (options: https.RequestOptions) {
    return new Promise((resolve, reject) => {
        const req  = https.request(options, (res) => {
            let data : string = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error : Error) => {
            reject(error);
        });

        req.end();
    });
}

export const getAndSaveDataForWhoIsService = async function (domain: string) {
    const whoIsTotalInfo = await fetchWhoIsInfo(domain);
    const whoIsData = parseWhoIsInfo(whoIsTotalInfo);
    const savedWhoIs : WhoisModel = await WhoisModel.create(whoIsData);
    return savedWhoIs.dataValues;
}

export const getAndSaveDataForVirusTotalService = async function (domain: string) {
    const virusTotalInfo = await fetchVirusTotalInfo(domain);
    const virusData = parseVirusesTotal(virusTotalInfo);
    const savedVirus : VirusModel = await VirusModel.create(virusData);
    return savedVirus.dataValues;
}

export const getAndSaveDataForVirusTotalAndWhoIsService = async function (domain: string) {
    const whoisPromise = getAndSaveDataForWhoIsService(domain);
    const virusTotalPromise = getAndSaveDataForVirusTotalService(domain);
    return [await whoisPromise, await virusTotalPromise];
}

