import db from './Class/db';
import server from './Class/server';

type obj = {
    [key: string]: any;
};
server.post('/db/insert', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const params: obj = req.body.params as obj

    const result = await db.mysqlInsert(tableName, params)
    return res.send(result)
})
server.post('/db/read', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const filter: obj = req.body.params as obj
    const result = await db.mysqlRead(tableName, filter)
    return res.send(result)
})