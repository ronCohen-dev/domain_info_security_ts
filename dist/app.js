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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sql_config_js_1 = require("./configs/sql.config.js");
const morgan_1 = __importDefault(require("morgan"));
const forensic_route_1 = __importDefault(require("./routes/forensic.route"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (process.env.EXPRESS_PORT || "3000");
app.get("/", (req, res, next) => {
    res.send('Hello from express + ts !!!!!!!!');
});
app.get("/hi", (req, res, next) => {
    res.send('Hi');
});
app.use("/forensic", forensic_route_1.default);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const retryLimit = 15;
let retryCount = 0;
const connectWithRetry = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sql_config_js_1.SequelizeDb.sync();
        console.log('Successfully connected to MySQL database');
    }
    catch (err) {
        console.error(`Error connecting to MySQL database, retrying...(${retryCount + 1}/${retryLimit})`);
        if (retryCount >= retryLimit) {
            console.error(`Exceeded retry limit of ${retryLimit}. Aborting...`);
            return;
        }
        retryCount++;
        setTimeout(connectWithRetry, 5000);
    }
});
connectWithRetry();
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log(` now listening on port ${port}`);
});
