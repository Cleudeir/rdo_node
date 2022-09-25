import dotenv from 'dotenv';
dotenv.config();
import { Sequelize, Model, DataTypes } from 'sequelize'
import { initModels } from './db_rdo/init-models';

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

    public async read(tableName: string, item?: any, value?: string | undefined): Promise<obj> {
        let data: obj = {}
        const limit = 1000
        if (!item && !value) {
            data = await this.tables[tableName].findAll({
                limit
            });
        } else {
            data = await this.tables[tableName].findAll({
                limit,
                where: {
                    [item]: value,
                }
            });
        }

        return data
    }
    public async update(tableName: string, params: obj, item: any, value: any): Promise<obj> {
        const data = await this.tables[tableName].update(params,
       { where: {
            [item]: value,
        }}
        );
        return data
    }
}
export default new Db()