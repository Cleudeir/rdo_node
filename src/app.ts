import express from 'express'
import cors from 'cors'
import mysql from 'mysql2';
import dotenv from 'dotenv';
import Query from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
dotenv.config();

type obj = {
    [key: string]: any;
};

class app {
    public express: express.Application
    public db: mysql.Connection

    public constructor() {
        this.express = express()
        this.db = this.mysqlConnect()

        this.middlewares()
        this.routes()
    }
    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }
    private mysqlConnect() {
        const connection = mysql.createConnection({
            host: process.env.HOST_MYQL,
            port: Number(process.env.PORT_MYQL),
            user: process.env.USER_MYQL,
            password: process.env.PASSWORD_MYQL,
            database: 'mydb',
        });

        connection.connect((err) => {
            if (err) return console.log(err);
            console.log('conectou!');
        });
        return connection;
    }
    private mysqlQueryInsert(tableName: string, params: obj): void {
        let column: string = '';
        let value: string = '';
        for (const key in params) {
            column += `${key},`;
            value += `'${params[key]}',`;
        }

        column = column.slice(0, -1);
        value = value.slice(0, -1);

        const queryString = `
              INSERT INTO ${tableName.toLocaleUpperCase()}
              (${column})
              VALUES
              (${value});`;
        const insert = this.db.query(queryString, (err, results, fields) => {
            if (err) return console.log(err);
            return console.log(`Valores inseridos na tabela ${tableName}`);
        })
    }
    private routes(): void {
        this.express.post('/', (req, res) => {

            const tableName: string = req.body.tableName as string
            const params: obj = req.body.params as obj
            console.log(tableName, params)

            this.mysqlQueryInsert(tableName, params)

            return res.send('hello')

        })
        this.express.get('/', (req, res) => {
            return res.send('hello')
        })
    }
}

export default new app()