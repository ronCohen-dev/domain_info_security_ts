'use strict';

import {NextFunction, Request, Response} from 'express';

import {getAndSaveDataForVirusTotalService , getAndSaveDataForWhoIsService , getAndSaveDataForVirusTotalAndWhoIsService} from '../services/forensic.service';

export const getVirusTotalInfoController = async function (req: Request, res: Response, next: NextFunction) {
    const domain : string = req.query.domain as string;
    const data  = await getAndSaveDataForVirusTotalService(domain);

    return res.status(200).json(data);
};

export const getWhoIsInfoController = async function (req: Request, res: Response, next: NextFunction) {
    const domain: string = req.query.domain as string;
    const data = await getAndSaveDataForWhoIsService(domain);
    return res.status(200).json(data);
};

export const checkWithBothController = async function (req: Request, res: Response, next: NextFunction) {
    const domain : string = req.query.domain as string;
    const [whoisInfo, virusTotalInfo] = await getAndSaveDataForVirusTotalAndWhoIsService(domain);
    return res.status(200).json({whoisInfo, virusTotalInfo});
};