var { db } = require('../database');
const pool = db.pool;

async function CreateUser(userData) {
    //var sql = "INSERT INTO users VALUES ('0','ErwanIsGayAsFuck','zbeubzbeub','erwanmoche@bing.com')";
    try {
        var sql = "INSERT INTO users VALUES ('0','" + userData.name + "','" + userData.password + "','" + userData.email + "')";
        const result = await pool.query(sql);
        console.log(result[0].insertId);
        return result;
    }catch (err) {
        console.error(err)
    }
}

function SearchUser(userData) {
    var sql = "SELECT id,name FROM users WHERE name='"+userData.name+"' && password ='"+userData.password+"'";
    db.connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        if (result !== null){
            console.log("Ya mom gay (200)")
        }else{
            console.log("Ya mom no gay (400)")

        }
    });
}

function Greetings(name) {
    console.log('Greetings ' + name);
}

module.exports.createUser = CreateUser;
module.exports.greet = Greetings;
module.exports.searchUser = SearchUser;
