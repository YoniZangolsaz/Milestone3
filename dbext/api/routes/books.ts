const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    res.status(200).json ({
        message: 'Get All Books'
    })
})

module.exports = router;
