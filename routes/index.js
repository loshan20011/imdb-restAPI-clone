const express = require('express')

const router = express.Router();

router.post('/movie', (req,res) => {
    res.send('Post API')
})

module.exports = router;