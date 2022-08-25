import { Sequelize } from 'sequelize'
import { DataTypes as type } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


type config = {
    database: String
    user: String
    password: String
    options:{           
        dialect: String
        host: String
        port: Number           
    }
}

const config  = {  
    database: String(process.env.DATABASE_MYSQL),               
    user: String(process.env.USER_MYSQL),
    password: String(process.env.PASSWORD_MYSQL),                  
    options:{
        dialect: 'mysql',
        host: String(process.env.HOST_MYSQL),
        port: Number(process.env.PORT_MYSQL),                
    }
}
const  sequelize  = new Sequelize(config);

class db {
 

    constructor(){
     this.USUARIOS = sequelize.define('usuarios', {
        id:{ 
            type: type.STRING,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true,
        },
        uid: {
            type: type.STRING,
            allowNull:false,
        },
        nome: {
            type: type.STRING,
            allowNull:false,
        },
        foto: {
            type: type.STRING,
            allowNull:true,
        },
        email: {
            type: type.STRING,
            allowNull:false,
        },
        permissao: {
            type: type.STRING,
            allowNull:false,
        },
        /*
        nome: VARCHAR(45) NULL,
        foto: VARCHAR(100) NULL,
        email: VARCHAR(45) NULL,
        permissao: VARCHAR(12) NULL DEFAULT '[3]',
        situacao: VARCHAR(7) NOT NULL,*/
     }
    }

    tables(){
        
    }

}