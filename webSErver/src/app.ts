import config from './config';
import express from 'express';
import * as bodyParser from 'body-parser';
const app = express();
const env = require("dotenv").config();
const isprime = require('isprime');

app.use(bodyParser.json());


const port = process.env.SERVER_PORT || config.PORT ;
app.set('view engine', 'ejs');

app.post('/api/numbers/prime/validate', (req, res) => {
    let bodyProperies:object = req.body;
    let bodyValue:number[] = Object.values(bodyProperies);
    let primeNumber:boolean = true;
    let regularNumber:boolean = false;
    
    for(let i = 0; i < bodyValue.length;) {
      let numberResult = isprime(bodyValue[i]);
      if(numberResult === true) {
        i++;
      }
      else {
        res.send(regularNumber)
      }
    }
    res.send (primeNumber);
})

app.get('/api/numbers/prime/', (req, res) => {
    let amountValue:number = parseInt(req.query.amount as string);
    let listOfNumber:number[] = [];

    if(amountValue <= 32) {
      for (let i = 1; listOfNumber.length < amountValue; i++) {
        let numberToCheck:number = i;
        let numerResult:boolean = isprime(i);
        if(numerResult === true) {
          listOfNumber.push(numberToCheck)
        }
      }
      res.send (listOfNumber) 
    }
    else {
      res.send("the number is bigger than 32")
    } 
})

app.get('/api/numbers/prime/display', function (req, res) {
  let listOfNumber:number[] = [];

  for (let i = 1; listOfNumber.length < 10; i++) {
    let numberToCheck:number = i;
    let numerResult:boolean = isprime(i);
    if(numerResult === true) {
      listOfNumber.push(numberToCheck)
    }
  }
  res.render('index', {number1: listOfNumber[0], number2: listOfNumber[1], number3: listOfNumber[2],
    number4: listOfNumber[3], number5: listOfNumber[4], number6: listOfNumber[5], number7: listOfNumber[6],
    number8: listOfNumber[7], number9: listOfNumber[8], number10: listOfNumber[9] });
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
