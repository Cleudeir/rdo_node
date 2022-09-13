import dotenv from 'dotenv';
dotenv.config();
import { Sequelize, Model, DataTypes } from 'sequelize'
import initModels from './db_rdo/init-models';

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
    public tb: any
    public constructor() {
        this.tb = initModels(sequelize)
    }
    public async insert(tableName: string, params: obj): Promise<obj> {

    }
    public async read(tableName: string, item?: string, value?: string): Promise<obj> {
    }
    public async update(tableName: string, params: obj): Promise<obj> {
    }
}
export default new Db().tb