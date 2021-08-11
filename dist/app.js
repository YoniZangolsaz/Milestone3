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
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const app = express_1.default();
const env = require("dotenv").config();
var isprime = require('isprime');
app.use(bodyParser.json());
const port = process.env.SERVER_PORT || config_1.default.PORT;
app.set('view engine', 'ejs');
app.post('/api/numbers/prime/validate', (req, res) => {
    let bodyProperies = req.body;
    let bodyValue = Object.values(bodyProperies);
    var listOfValue = [];
    for (let i = 0; i < bodyValue.length;) {
        let numberResult = isprime(bodyValue[i]);
        if (numberResult === true) {
            i++;
        }
        else {
            res.send(false);
        }
    }
    res.send(true);
});
app.get('/api/numbers/prime/', (req, res) => {
    let amountValue = (req.query.amount);
    let listOfNumber = [];
    for (let i = 1; listOfNumber.length < amountValue; i++) {
        let numberToCheck = i;
        let numerResult = isprime(i);
        if (numerResult === true) {
            listOfNumber.push(numberToCheck);
        }
    }
    res.send(listOfNumber);
});
app.get('/api/numbers/prime/display', function (req, res) {
    let listOfNumber = [];
    for (let i = 1; listOfNumber.length < 10; i++) {
        let numberToCheck = i;
        let numerResult = isprime(i);
        if (numerResult === true) {
            listOfNumber.push(numberToCheck);
        }
    }
    res.render('index', { number1: listOfNumber[0], number2: listOfNumber[1], number3: listOfNumber[2],
        number4: listOfNumber[3], number5: listOfNumber[4], number6: listOfNumber[5], number7: listOfNumber[6],
        number8: listOfNumber[7], number9: listOfNumber[8], number10: listOfNumber[9] });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map