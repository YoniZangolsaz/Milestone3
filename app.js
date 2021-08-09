require("dotenv").config();
var express = require('express');
var app = express();
var port = process.env.SERVER_PORT;
app.get('/', function (req, res) {
    res.send('Hey1234');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
