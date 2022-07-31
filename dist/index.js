"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _db = require('./Class/db'); var _db2 = _interopRequireDefault(_db);
var _server = require('./Class/server'); var _server2 = _interopRequireDefault(_server);




_server2.default.post('/db/insert', async (req, res) => {
    const tableName = req.body.tableName 
    const params = req.body.params 

    const result = await _db2.default.mysqlInsert(tableName, params)
    return res.send(result)
})
_server2.default.post('/db/read', async (req, res) => {
    const tableName = req.body.tableName 
    const filter = req.body.params 
    const result = await _db2.default.mysqlRead(tableName, filter)
    return res.send(result)
})