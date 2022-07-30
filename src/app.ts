import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

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
    private routes(): void {
        this.express.post('/', (req, res) => {
            return res.send('hello')
        }
        )
        this.express.listen(3333)
    }
}

export default new app()