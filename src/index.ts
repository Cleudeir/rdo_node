import Db from './class/Db';
import Server from './class/Server';

type obj = {
    [key: string]: any;
};


Server.get('/', async (req, res) => {
    return res.send("online")
})


Server.post('/db/insert', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const params: obj | obj[] = req.body.params as obj
    const updateOnDuplicate: string[] = req.body.updateOnDuplicate as string[]
    console.log(tableName, params, updateOnDuplicate)
    if (tableName && params) {
        const result = await Db.insert(tableName.toLocaleUpperCase(), params, updateOnDuplicate)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, params: obj}")
})


Server.post('/db/update', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const item: string = req.body.item as string
    const value: string = req.body.value as string
    const params: obj = req.body.params as obj
    console.log(tableName, params)
    if (tableName && params) {
        const result = await Db.update(tableName, params, item, value)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, params: obj}")
})


Server.post('/db/read', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const item: string = req.body.item as string
    const value: string = req.body.value as string
    console.log(tableName, item, value)
    if (tableName) {
        const result = await Db.read(tableName, item, value)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})


Server.post('/db/readAllIncludes', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const tableIncrement: string = req.body.tableIncrement as string
    const attributes: string[] = req.body.attributes as string[]
    console.log(tableName, tableIncrement, attributes)
    if (tableName) {
        const result = await Db.readAllIncludes(tableName, tableIncrement, attributes)
        console.log(result)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})

Server.post('/db/destroy', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const item: string = req.body.item as string
    const value: string = req.body.value as string
    console.log(tableName, item, value)
    if (tableName) {
        const result = await Db.destroy(tableName, item, value)
        console.log({result})
        return res.send({result})
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})


Server.post('/db/readPKincludes', async (req, res) => {
    const tableName: string = req.body.tableName as string
    const itemPK: string = req.body.itemPK as string
    const tableIncrement: string = req.body.tableIncrement as string
    console.log({ tableName, itemPK, tableIncrement })
    if (tableName) {
        const result = await Db.readPKincludes(tableName, itemPK, tableIncrement)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
})
