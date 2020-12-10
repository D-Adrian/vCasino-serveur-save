var mysql = require('mysql2/promise');
const store = {pool:null}

async function initConn() {

    const pool = await mysql.createPool({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: "vcasino",
    });
    console.log("la connection est établie");
    store.pool = pool;
    return pool;
}

module.exports.initConn = initConn;
module.exports.db = store;
