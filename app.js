"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var bodyParser = require("body-parser");
var env = require("dotenv").config();
var express = require('express');
var app = express();
var port = process.env.SERVER_PORT || config_1["default"].PORT;
app.use(bodyParser.json());
app.post('/api/numbers/prime/validate', function (req, res) {
    var bodyProperies = req.body;
    var bodyValue = Object.values(bodyProperies);
    var listOfValue = [];
    bodyValue.forEach(function (value) {
        var abc = isPrime(value);
        listOfValue.push(abc);
    });
    res.send(listOfValue);
});
app.get('/api/numbers/prime', function (req, res) {
    var a = (req.query.amount);
    res.send(a);
    // let number = (req.query.amount);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            }
            else if (num === i * i) {
                return false;
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
}
