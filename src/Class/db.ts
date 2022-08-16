import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

type obj = {
    [key: string]: any;
};


class db {

    countErrors: number;
    public mysql: Promise<mysql.Connection>

    public constructor() {
        this.countErrors = 0
        this.mysql = this.mysqlConnect()  
    }
    private async mysqlConnect() {
        const config = {
            host: process.env.HOST_MYSQL,
            port: Number(process.env.PORT_MYSQL),
            user: process.env.USER_MYSQL,
            password: process.env.PASSWORD_MYSQL,
            database: process.env.DATABASE_MYSQL,
        }
        let connection:any 
        try {
            connection = await mysql.createConnection(config);
        } catch (error) {
            if(this.countErrors < 10){
                setTimeout(() => { this.countErrors+=1 ; this.mysqlConnect()} , 10000);
            }            
            console.log("CONECTAR BANCO DE DADOS: " + error) 
            return error;
        }
        try {
            await connection.connect();
            console.log("conectado ao banco de dados")
            return connection;
        } catch (error) {
            console.log("CONECTAR BANCO DE DADOS: " + error) 
            if(this.countErrors < 10){
                setTimeout(() => { this.countErrors+=1 ; this.mysqlConnect()} , 10000);
            }         
            return error;
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
        try {
            const [result] : any[] = await (await this.mysql).query(queryString)
            return result
        } catch (error) {
            return {sqlMessage: error.sqlMessage}
        }
    }
    public async read(tableName: string, item?: string, value?: string): Promise<obj> {
        let where: string = '';
        if (item !== undefined && value !== undefined) {
            where = `where ${item} = "${String(value).toLocaleLowerCase()}"`
        }
        const queryString = `SELECT * FROM ${tableName.toLocaleUpperCase()} ${where};`;
        
        try {
            const [result] : any[] = await (await this.mysql).query(queryString)
            if(result.length  === 0 ){
                return {sqlMessage:"Nada encontrado"}
            }
            return result
        } catch (error) {
            return {sqlMessage: error.sqlMessage}
        }
    }
    public async update(tableName: string, itemUpdate: string, valueUpdate: string, itemReference: string, valueReference: string): Promise<obj> {
        const queryString = `UPDATE ${tableName.toLocaleUpperCase()} 
        SET ${itemUpdate} = "${String(valueUpdate).toLocaleLowerCase()}" 
        WHERE (${itemReference} = ${String(valueReference)});`;
        return await this.sendQuery(queryString)
    }
}

export default new db()