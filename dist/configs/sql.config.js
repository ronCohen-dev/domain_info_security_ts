'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeDb = void 0;
const sequelize_1 = require("sequelize");
const constant_util_1 = require("../utils/constant.util");
const SQL_PORT_AS_NUMBER = parseInt(constant_util_1.SQL_PORT);
exports.SequelizeDb = new sequelize_1.Sequelize(constant_util_1.SQL_DATABASE, 'root', constant_util_1.SQL_ROOT_PASSWORD, {
    host: `sql`,
    dialect: 'mysql',
    port: SQL_PORT_AS_NUMBER
});
console.log("SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE : ", constant_util_1.SQL_PORT, constant_util_1.SQL_ROOT_PASSWORD, constant_util_1.SQL_DATABASE, constant_util_1.SQL_TYPE);
