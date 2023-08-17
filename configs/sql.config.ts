'use strict';
import {Sequelize} from "sequelize";


import {SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE} from "../utils/constant.util";

const SQL_PORT_AS_NUMBER : number = parseInt(SQL_PORT);

export const SequelizeDb : Sequelize = new Sequelize(SQL_DATABASE, 'root', SQL_ROOT_PASSWORD, {
    host: `sql`,
    dialect: 'mysql',
    port: SQL_PORT_AS_NUMBER
});
console.log("SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE : ", SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE)