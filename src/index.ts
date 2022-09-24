import Db from './Class/Db';
import Server from './Class/Server';

type obj = {
    [key: string]: any;
};
Server.post('/db/insert', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const params: obj = req.body.params as obj
    console.log('EXPO_NODE: ', tableName, params)
    if (tableName && params) {
        const result = await Db.insert(tableName.toLocaleUpperCase(), params)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, params: obj}")
})

Server.post('/db/update', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const params: obj = req.body.params as obj
    console.log('EXPO_NODE: ', tableName, params)
    if (tableName && params) {
        const result = await Db.update(tableName.toLocaleUpperCase(), params)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, params: obj}")
})

Server.post('/db/read', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const item: string = req.body.item as string
    const value: string = req.body.value as string
    console.log('EXPO_NODE: ', tableName, item, value)
    if (tableName) {
        const result = await Db.read(tableName, item, value)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})
Server.get('/', async (req, res) => {
    return res.send("online")
})