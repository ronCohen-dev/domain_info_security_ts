'use strict';

import {DataTypes, Model, Optional} from "sequelize";
import {SequelizeDb} from "../configs/sql.config";

interface WhoisAttributes {
    id: number;
    domainName: string;
    parseCode: number | null;
    auditCreatedDate: string | null;
    auditUpdatedDate: string | null;
    registrarName: string | null;
    registrarIANAID: string | null;
    registryCreatedDate: string | null;
    registryUpdatedDate: string | null;
    registryExpiresDate: string | null;
    registrantName: string | null;
    registrantStreet1: string | null;
    registrantCity: string | null;
    registrantPostalCode: string | null;
    registrantCountry: string | null;
    registrantCountryCode: string | null;
    registrantEmail: string | null;
}
interface WhoisCreationAttributes extends Optional<WhoisAttributes, 'id'> {
}
export class WhoisModel extends Model<WhoisAttributes,WhoisCreationAttributes> implements WhoisAttributes {
    public id!: number;
    public domainName!: string;
    public parseCode!: number | null;
    public auditCreatedDate!: string | null;
    public auditUpdatedDate!: string | null;
    public registrarName!: string | null;
    public registrarIANAID!: string | null;
    public registryCreatedDate!: string | null;
    public registryUpdatedDate!: string | null;
    public registryExpiresDate!: string | null;
    public registrantName!: string | null;
    public registrantStreet1!: string | null;
    public registrantCity!: string | null;
    public registrantPostalCode!: string | null;
    public registrantCountry!: string | null;
    public registrantCountryCode!: string | null;
    public registrantEmail!: string | null;

    static initModel(sequelize: typeof SequelizeDb): typeof WhoisModel {

        return WhoisModel.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                domainName: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                parseCode: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                auditCreatedDate: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                auditUpdatedDate: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrarName: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrarIANAID: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registryCreatedDate: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registryUpdatedDate: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registryExpiresDate: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantName: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantStreet1: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantCity: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantPostalCode: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantCountry: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantCountryCode: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                registrantEmail: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
            },
            {
                sequelize,
                tableName: 'whois'
            }
        );
    }

}


export default WhoisModel.initModel(SequelizeDb);
