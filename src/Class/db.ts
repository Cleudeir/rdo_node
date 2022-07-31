import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

type obj = {
    [key: string]: any;
};


class db {
    public mysql: Promise<mysql.Connection>
    public constructor() {
        this.mysql = this.mysqlConnect()
    }
    private async mysqlConnect() {
        const connection = await mysql.createConnection({
            host: process.env.HOST_MYQL,
            port: Number(process.env.PORT_MYQL),
            user: process.env.USER_MYQL,
            password: process.env.PASSWORD_MYQL,
            database: 'mydb',
        });
        try {
            await connection.connect();
            console.log("conectado ao banco de dados")
            return connection;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
    private async sendQuery(queryString: string): Promise<obj> {
        try {
            const result = await (await this.mysql).query(queryString)
            return result[0]
        } catch (error) {
            console.log(error)
            return error
        }
    }
    public async insert(tableName: string, params: obj): Promise<obj> {
        let column: string = '';
        let value: string = '';
        for (const key in params) {
            column += `${key},`;
            value += `'${String(params[key]).toLocaleLowerCase()}',`;
        }
        column = column.slice(0, -1);
        value = value.slice(0, -1);
        const queryString = `INSERT INTO ${tableName.toLocaleUpperCase()}(${column}) VALUES (${value});`;
        return await this.sendQuery(queryString)
    }
    public async read(tableName: string, filter?: obj): Promise<obj> {
        let where: string = '';
        if (filter !== undefined) {
            for (const key in filter) {
                where = `where ${key} = "${String(filter[key]).toLocaleLowerCase()}"`
            }
        }
        const queryString = `SELECT * FROM ${tableName.toLocaleUpperCase()} ${where};`;
        return await this.sendQuery(queryString)
    }
    
}

export default new db()