import config from './config'
import * as bodyParser from 'body-parser';
const env = require("dotenv").config();
import express from 'express';
const app = express();
const port = process.env.SERVER_PORT || config.PORT ;
var isprime = require('isprime');


app.use(bodyParser.json());

app.post('/api/numbers/prime/validate', (req, res) => {
    let bodyProperies:number = req.body;
    let bodyValue = Object.values(bodyProperies);
    var listOfValue : boolean[] = [];

    bodyValue.forEach(value => {
        let numberResult = isprime(value);
        listOfValue.push(numberResult);        
    });
    res.send (listOfValue);
})

app.get('/api/numbers/prime/', (req, res) => {
    var amountValue:any = (req.query.amount);
    
    var listOfNumber:number[] = [];

    for (let i = 1; listOfNumber.length < amountValue; i++) {
      let number = i;
      let a = isprime(i);
      if(a === true) {
        listOfNumber.push(number)
      }
    }
    res.send (listOfNumber)   
} )

app.get('/api/numbers/prime/display', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
