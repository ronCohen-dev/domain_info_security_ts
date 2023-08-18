'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusModel = void 0;
const sequelize_1 = require("sequelize");
const sql_config_1 = require("../configs/sql.config");
class VirusModel extends sequelize_1.Model {
    static initModel(sequelize) {
        VirusModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            domainId: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            jarm: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            whois: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            lastHttpsCertificateDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            lastDnsRecords: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            lastDnsRecordsDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            lastAnalysisDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            lastAnalysisStats: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            lastAnalysisResults: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            popularityRanks: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            reputation: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            lastHttpsCertificate: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            tld: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            lastModificationDate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            categories: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            },
            totalVotes: {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'virus'
        });
        return VirusModel;
    }
}
exports.VirusModel = VirusModel;
exports.default = VirusModel.initModel(sql_config_1.SequelizeDb);
