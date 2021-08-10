import config from './config'
import * as bodyParser from 'body-parser';
const env = require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || config.PORT ;

app.use(bodyParser.json());

app.post('/api/numbers/prime/validate', (req, res) => {
    let bodyProperies:number = req.body;
    let bodyValue = Object.values(bodyProperies);
    var listOfValue = [];

    bodyValue.forEach(value => {
        const abc = isPrime(value);
        listOfValue.push(abc);        
    });
    res.send (listOfValue);
})

app.get('/api/numbers/prime', (req, res) => {
    let a = (req.query.amount)
    res.send (a)
    // let number = (req.query.amount);
    
} )

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function isPrime(num:number):boolean {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
}