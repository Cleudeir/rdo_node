import { Sequelize } from 'sequelize'
import { DataTypes as type } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


type config = {
    database: String
    user: String
    password: String
    options: {
        dialect: String
        host: String
        port: Number
    }
}

const config = {
    database: String(process.env.DATABASE_MYSQL),
    user: String(process.env.USER_MYSQL),
    password: String(process.env.PASSWORD_MYSQL),
    options: {
        dialect: 'mysql',
        host: String(process.env.HOST_MYSQL),
        port: Number(process.env.PORT_MYSQL),
    }
}
const sequelize = new Sequelize(config);

class db {


    constructor() {
    }

}