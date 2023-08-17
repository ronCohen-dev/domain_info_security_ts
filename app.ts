'use strict';
import express, {Request, Response, NextFunction, Express} from "express";
import {SequelizeDb} from "./configs/sql.config.js";
import logger from "morgan"
import forensicRouter from "./routes/forensic.route"
import http from "http"
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

const port : string = (process.env.EXPRESS_PORT || "3000");

app.get("/", (req : Request , res : Response , next : NextFunction)=> {
    res.send('Hello from express + ts !!!!!!!!')
})

app.get("/hi", (req , res , next)=> {
    res.send('Hi')
})

app.use("/forensic", forensicRouter)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



const retryLimit : number = 15;
let retryCount : number = 0;

const connectWithRetry = async () => {
    try {
        await SequelizeDb.sync();
        console.log('Successfully connected to MySQL database');
    } catch (err) {
        console.error(`Error connecting to MySQL database, retrying...(${retryCount + 1}/${retryLimit})`);
        if (retryCount >= retryLimit) {
            console.error(`Exceeded retry limit of ${retryLimit}. Aborting...`);
            return;
        }
        retryCount++;
        setTimeout(connectWithRetry, 5000);
    }
};

connectWithRetry();




const server = http.createServer(app)

server.listen(port , () =>{
    console.log(` now listening on port ${port}`)



})