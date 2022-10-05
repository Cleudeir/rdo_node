import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize'
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
        this.tables = null
        this.start()
    }
    public async start() {
        const tables = initModels(sequelize)
        const force = false

        await tables.EMPRESAS.sync({ force })
        await tables.OBRAS.sync({ force })
        await tables.FUNCAO.sync({ force })
        await tables.FUNCIONARIOS.sync({ force })
        await tables.CATEGORIA.sync({ force })
        await tables.EQUIPAMENTOS.sync({ force })
        await tables.OBRAS_EMPRESAS.sync({ force })
        await tables.FRENTES.sync({ force })
        await tables.RDO_FUNCIONARIOS.sync({ force })
        await tables.RDO_EQUIPAMENTOS.sync({ force })
        await tables.USUARIOS.sync({ force })
        await tables.USUARIOS_OBRAS.sync({ force })

        this.tables = tables
    }
    public async insert(tableName: string, params: obj | obj[], updateOnDuplicate?: string[] | undefined): Promise<obj> {
        let data: obj | obj[] = {}
        if (params.length === 0) {
            return { Error: "Params []" }
        }
        if (params.length > 0) {
            if (updateOnDuplicate != undefined && updateOnDuplicate.length > 0) {
                data = await this.tables[tableName].bulkCreate(params, { ignoreDuplicates: true, updateOnDuplicate, logging: false })
            } else {
                data = await this.tables[tableName].bulkCreate(params, { ignoreDuplicates: true, logging: false })
            }
        } else {
            data = await this.tables[tableName].create(params);
        }
        return data
    }

    public async destroy(tableName: string, item?: any, value?: string): Promise<obj> {
        let data: obj | obj[] = {}

        data = await this.tables[tableName].destroy({
            where: {
                [item]: value
            }
        });

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
    public async readAllIncludes(tableName: string, tableIncrement: string, attributes?: string[] | undefined): Promise<obj> {
        let data: obj = {}
        const limit = 1000
        if (attributes && attributes.length > 0) {
            data = await this.tables[tableName].findAll({
                limit,
                include: [{
                    model: this.tables[tableIncrement],
                    as: tableIncrement,
                    attributes,
                    raw: true,
                }]
            });
        } else {
            data = await this.tables[tableName].findAll({
                limit,
                include: [{
                    model: this.tables[tableIncrement],
                    as: tableIncrement,
                    raw: true,
                }]
            });
        }

        return data
    }
    public async update(tableName: string, params: obj, item: any, value: any): Promise<obj> {
        const data = await this.tables[tableName].update(params,
            {
                where: {
                    [item]: value,
                }
            }
        );
        return data
    }
    public async readPKincludes(tableName: string, itemPK: any, tableIncrement: string): Promise<obj> {
        let data: obj = {}
        const limit = 1000
        console.log({ tableName, itemPK, tableIncrement })
        data = await this.tables[tableName].findByPk(itemPK, {
            include: [
                {
                    model: this.tables[tableIncrement],
                    as: tableIncrement
                },
            ],
        })

        return data
    }
}
export default new Db()