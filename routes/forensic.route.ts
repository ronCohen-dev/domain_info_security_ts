'use strict'
import express, {Router} from "express";

import {checkWithVirusTotalMiddleware} from '../middlewares/forensic_check.middleware';
import {
    checkWithBothController,
    getVirusTotalInfoController,
    getWhoIsInfoController
} from "../controllers/forensicController";


const router : Router = express.Router();


router.get('/virus-total', checkWithVirusTotalMiddleware, getVirusTotalInfoController);
router.get('/whoami', checkWithVirusTotalMiddleware, getWhoIsInfoController);
router.get('/check-all', checkWithVirusTotalMiddleware, checkWithBothController);

export default router;

