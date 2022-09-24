import dotenv from 'dotenv';
dotenv.config();
import { Sequelize, Model, DataTypes } from 'sequelize'
import {initModels} from './db_rdo/init-models';

type obj = {
    [key: string]: any;
};

const sequelize = new Sequelize(
    String(process.env.DATABASE_DB),
    String(process.env.USER_DB),
    String(process.env.PASSWORD_DB),
    {
        dialect: 'mariadb',
        host: String(process.env.HOST_DB),
        port: Number(process.env.PORT_DB)
    })

class Db {
    public tables: any
    public constructor() {
        this.tables = initModels(sequelize)
    }
    public async insert(tableName: string, params: obj): Promise<obj> {
        const data = await this.tables[tableName].create(params);
        return data
    }

    public async read(tableName: string, item: string, value: string): Promise<obj> {
        const data = await this.tables[tableName].findAll({
            where: {
                [item]: value
            }
        });
        return data
    }
    public async update(tableName: string, params: obj): Promise<obj> {
    }
}
export default new Db()