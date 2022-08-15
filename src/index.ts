import db from './Class/db';
import server from './Class/server';

type obj = {
    [key: string]: any;
};
server.post('/db/insert', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const params: obj = req.body.params as obj
    console.log('EXPO_NODE: ',tableName, params)
    if (tableName && params) {
        const result = await db.insert(tableName, params)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, params: obj}")
})
server.post('/db/read', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const item: string = req.body.item as string
    const value: string = req.body.value as string
    console.log('EXPO_NODE: ',tableName, item, value)
    if (tableName) {
        const result = await db.read(tableName, item, value)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})
server.get('/', async (req, res) => {
    return res.send("online")
})