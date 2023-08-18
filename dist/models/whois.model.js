'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoisModel = void 0;
const sequelize_1 = require("sequelize");
const sql_config_1 = require("../configs/sql.config");
class WhoisModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return WhoisModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            domainName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            parseCode: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            auditCreatedDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            auditUpdatedDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrarName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrarIANAID: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registryCreatedDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registryUpdatedDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registryExpiresDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantStreet1: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantCity: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantPostalCode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantCountry: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantCountryCode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            registrantEmail: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
        }, {
            sequelize,
            tableName: 'whois'
        });
    }
}
exports.WhoisModel = WhoisModel;
exports.default = WhoisModel.initModel(sql_config_1.SequelizeDb);
