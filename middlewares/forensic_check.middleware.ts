"use strict";
import {NextFunction, Request, Response} from 'express';

import {VirusModel} from '../models/virus.model';
import {WhoisModel} from '../models/whois.model';
export const checkWithVirusTotalMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const domain : string  = req.query.domain as string;
    const domainForWhoisQuery : string = domain.replace(/^www\./i, '');

    const [whoisInfo , virusesInfo ] = await Promise.all([
        WhoisModel.findOne({
            where: {
                domainName: domainForWhoisQuery
            }
        }),
        VirusModel.findOne({
            where: {
                domainId: domain
            }
        })
    ]);

    if (whoisInfo !== null && virusesInfo !== null) {
        return res.status(200).json({whoisInfo, virusesInfo});
    }

    console.log("go to the server");
    next();
};
