'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const forensic_check_middleware_1 = require("../middlewares/forensic_check.middleware");
const forensicController_1 = require("../controllers/forensicController");
const router = express_1.default.Router();
router.get('/virus-total', forensic_check_middleware_1.checkWithVirusTotalMiddleware, forensicController_1.getVirusTotalInfoController);
router.get('/whoami', forensic_check_middleware_1.checkWithVirusTotalMiddleware, forensicController_1.getWhoIsInfoController);
router.get('/check-all', forensic_check_middleware_1.checkWithVirusTotalMiddleware, forensicController_1.checkWithBothController);
// module.exports = router;
exports.default = router;
