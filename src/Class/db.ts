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
            host: process.env.HOST_MYSQL,
            port: Number(process.env.PORT_MYSQL),
            user: process.env.USER_MYSQL,
            password: process.env.PASSWORD_MYSQL,
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
    public async read(tableName: string, item?: string, value?: string): Promise<obj> {
        let where: string = '';
        if (item !== undefined && value !== undefined) {
            where = `where ${item} = "${String(value).toLocaleLowerCase()}"`
        }
        const queryString = `SELECT * FROM ${tableName.toLocaleUpperCase()} ${where};`;
        console.log(queryString);
        const result: obj = (await this.sendQuery(queryString))[0]
        return result
    }
    public async update(tableName: string, itemUpdate: string, valueUpdate: string, itemReference: string, valueReference: string): Promise<obj> {
        const queryString = `UPDATE ${tableName.toLocaleUpperCase()} 
        SET ${itemUpdate} = "${String(valueUpdate).toLocaleLowerCase()}" 
        WHERE (${itemReference} = ${String(valueReference)});`;
        return await this.sendQuery(queryString)
    }
}

export default new db()