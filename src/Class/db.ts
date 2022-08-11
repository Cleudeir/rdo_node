import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

type obj = {
    [key: string]: any;
};


class db {
    public mysql: Promise<mysql.Connection>
    public constructor() {
        setTimeout(() =>{
            this.mysql = this.mysqlConnect()
        },10000);
        
    }
    private async mysqlConnect() {
        const config = {
            host: process.env.HOST_MYSQL,
            port: Number(process.env.PORT_MYSQL),
            user: process.env.USER_MYSQL,
            password: process.env.PASSWORD_MYSQL,
            database: process.env.DATABASE_MYSQL,
        }
        console.log(config);
        const connection = await mysql.createConnection(config);
        try {
            await connection.connect();
            console.log("conectado ao banco de dados")
            return connection;
        } catch (error) {
            console.log("CONECTAR BANCO DE DADOS: " + error)
            return error;
        }
    }
    private async sendQuery(queryString: string): Promise<obj> {
        try {
            const [result] : any[] = await (await this.mysql).query(queryString)
            if(result.length  === 0 ){
                return {sqlMessage:"Usuário não cadastrado"}
            }
            return result[0]
        } catch (error) {
            return {sqlMessage: "FETCH SERVER " + error.sqlMessage}
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
        
        const result: obj = (await this.sendQuery(queryString))
        console.log('result: ',result);
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