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
exports.checkWithBothController = exports.getWhoIsInfoController = exports.getVirusTotalInfoController = void 0;
const forensic_service_1 = require("../services/forensic.service");
const getVirusTotalInfoController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const domain = req.query.domain;
        const data = yield (0, forensic_service_1.getAndSaveDataForVirusTotalService)(domain);
        return res.status(200).json(data);
    });
};
exports.getVirusTotalInfoController = getVirusTotalInfoController;
const getWhoIsInfoController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const domain = req.query.domain;
        const data = yield (0, forensic_service_1.getAndSaveDataForWhoIsService)(domain);
        return res.status(200).json(data);
    });
};
exports.getWhoIsInfoController = getWhoIsInfoController;
const checkWithBothController = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const domain = req.query.domain;
        const [whoisInfo, virusTotalInfo] = yield (0, forensic_service_1.getAndSaveDataForVirusTotalAndWhoIsService)(domain);
        return res.status(200).json({ whoisInfo, virusTotalInfo });
    });
};
exports.checkWithBothController = checkWithBothController;
