require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Hey12344')
} )

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})