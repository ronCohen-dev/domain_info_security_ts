'use strict';

import {DataTypes, Model, Optional} from "sequelize";

import {SequelizeDb} from "../configs/sql.config";


interface VirusAttributes {
    id: number;
    domainId: string;
    jarm: string | null;
    whois: string | null;
    lastHttpsCertificateDate: Date | null;
    lastDnsRecords: Record<string, any> | null;
    lastDnsRecordsDate: Date | null;
    lastAnalysisDate: Date | null;
    lastAnalysisStats: Record<string, any> | null;
    lastAnalysisResults: Record<string, any> | null;
    popularityRanks: Record<string, any> | null;
    reputation: number | null;
    lastHttpsCertificate: Record<string, any> | null;
    tld: string | null;
    lastModificationDate: Date | null;
    categories: Record<string, any> | null;
    totalVotes: Record<string, any> | null;
}

interface VirusCreationAttributes extends Optional<VirusAttributes, 'id'> {
}

export class VirusModel extends Model<VirusAttributes, VirusCreationAttributes> implements VirusAttributes {
    public id!: number;
    public domainId!: string;
    public jarm!: string | null ;
    public whois!: string | null ;
    public lastHttpsCertificateDate!: Date | null;
    public lastDnsRecords!: Record<string, any> | null;
    public lastDnsRecordsDate!: Date | null;
    public lastAnalysisDate!: Date | null;
    public lastAnalysisStats!: Record<string, any> | null;
    public lastAnalysisResults!: Record<string, any> | null;
    public popularityRanks!: Record<string, any> | null;
    public reputation!: number | null;
    public lastHttpsCertificate!: Record<string, any> | null;
    public tld!: string | null;
    public lastModificationDate!: Date | null;
    public categories!: Record<string, any> | null;
    public totalVotes!: Record<string, any> | null;

    static initModel(sequelize: typeof SequelizeDb): typeof VirusModel {
        VirusModel.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                domainId: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                jarm: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                whois: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                lastHttpsCertificateDate: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                lastDnsRecords: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                lastDnsRecordsDate: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                lastAnalysisDate: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                lastAnalysisStats: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                lastAnalysisResults: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                popularityRanks: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                reputation: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                lastHttpsCertificate: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                tld: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                lastModificationDate: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                categories: {
                    type: DataTypes.JSON,
                    allowNull: true
                },
                totalVotes: {
                    type: DataTypes.JSON,
                    allowNull: true
                }
            },
            {
                sequelize,
                tableName: 'virus'
            }
        );
        return VirusModel;
    }
}

export default VirusModel.initModel(SequelizeDb);
