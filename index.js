const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");
const { initConn } = require("./database")

initConn().then(function (){

    var user = require('./routes/user.js');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api/user', user);

    server.listen(8080);
})
    .catch(function (err){
        console.log(err)
        process.exit(1);
    })

