"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const bodyParser = __importStar(require("body-parser"));
const env = require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.SERVER_PORT || config_1.default.PORT;
var isprime = require('isprime');
app.use(bodyParser.json());
app.post('/api/numbers/prime/validate', (req, res) => {
    let bodyProperies = req.body;
    let bodyValue = Object.values(bodyProperies);
    var listOfValue = [];
    bodyValue.forEach(value => {
        let numberResult = isprime(value);
        listOfValue.push(numberResult);
    });
    res.send(listOfValue);
});
app.get('/api/numbers/prime/', (req, res) => {
    var amountValue = (req.query.amount);
    var listOfNumber = [];
    for (let i = 1; listOfNumber.length < amountValue; i++) {
        let number = i;
        let a = isprime(i);
        if (a === true) {
            listOfNumber.push(number);
        }
    }
    res.send(listOfNumber);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map