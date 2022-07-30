import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

app.express.listen(process.env.PORT_EXPRESS,()=>{
    console.log(`iniciados na porta ${process.env.PORT_EXPRESS}`)
})