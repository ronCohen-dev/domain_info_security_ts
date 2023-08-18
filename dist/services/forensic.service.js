'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAndSaveDataForVirusTotalAndWhoIsService = exports.getAndSaveDataForVirusTotalService = exports.getAndSaveDataForWhoIsService = void 0;
const https = __importStar(require("https"));
const virus_model_1 = require("../models/virus.model");
const whois_model_1 = require("../models/whois.model");
const constant_util_1 = require("../utils/constant.util");
const forensic_ut_1 = require("../utils/forensic.ut");
const fetchVirusTotalInfo = function (domain) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = {
            'method': 'GET',
            'hostname': 'www.virustotal.com',
            'path': `/api/v3/domains/${domain}`,
            'headers': {
                'x-apikey': constant_util_1.VIRUS_TOTAL_API_KEY
            },
        };
        return sendRequest(options);
    });
};
const fetchWhoIsInfo = function (domain) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = {
            'method': 'GET',
            'hostname': 'www.whoisxmlapi.com',
            'path': `/whoisserver/WhoisService?domainName=${domain}&apiKey=${constant_util_1.WHO_IS_API_KEY}&outputFormat=json`,
        };
        return sendRequest(options);
    });
};
const sendRequest = function (options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            });
            req.on('error', (error) => {
                reject(error);
            });
            req.end();
        });
    });
};
const getAndSaveDataForWhoIsService = function (domain) {
    return __awaiter(this, void 0, void 0, function* () {
        const whoIsTotalInfo = yield fetchWhoIsInfo(domain);
        const whoIsData = (0, forensic_ut_1.parseWhoIsInfo)(whoIsTotalInfo);
        const savedWhoIs = yield whois_model_1.WhoisModel.create(whoIsData);
        return savedWhoIs.dataValues;
    });
};
exports.getAndSaveDataForWhoIsService = getAndSaveDataForWhoIsService;
const getAndSaveDataForVirusTotalService = function (domain) {
    return __awaiter(this, void 0, void 0, function* () {
        const virusTotalInfo = yield fetchVirusTotalInfo(domain);
        const virusData = (0, forensic_ut_1.parseVirusesTotal)(virusTotalInfo);
        const savedVirus = yield virus_model_1.VirusModel.create(virusData);
        return savedVirus.dataValues;
    });
};
exports.getAndSaveDataForVirusTotalService = getAndSaveDataForVirusTotalService;
const getAndSaveDataForVirusTotalAndWhoIsService = function (domain) {
    return __awaiter(this, void 0, void 0, function* () {
        const whoisPromise = (0, exports.getAndSaveDataForWhoIsService)(domain);
        const virusTotalPromise = (0, exports.getAndSaveDataForVirusTotalService)(domain);
        return [yield whoisPromise, yield virusTotalPromise];
    });
};
exports.getAndSaveDataForVirusTotalAndWhoIsService = getAndSaveDataForVirusTotalAndWhoIsService;
