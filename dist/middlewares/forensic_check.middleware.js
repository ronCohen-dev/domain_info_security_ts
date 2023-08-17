"use strict";
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
exports.checkWithVirusTotalMiddleware = void 0;
// const {NextFunction, Request, Response} = require('express');
// const express = require('express');
// const {NextFunction, Request, Response} = express;
const virus_model_1 = require("../models/virus.model");
const whois_model_1 = require("../models/whois.model");
const checkWithVirusTotalMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const domain = req.query.domain;
    const domainForWhoisQuery = domain.replace(/^www\./i, '');
    const [whoisInfo, virusesInfo] = yield Promise.all([
        whois_model_1.WhoisModel.findOne({
            where: {
                domainName: domainForWhoisQuery
            }
        }),
        virus_model_1.VirusModel.findOne({
            where: {
                domainId: domain
            }
        })
    ]);
    if (whoisInfo !== null && virusesInfo !== null) {
        return res.status(200).json({ whoisInfo, virusesInfo });
    }
    console.log("go to the server");
    next();
});
exports.checkWithVirusTotalMiddleware = checkWithVirusTotalMiddleware;
