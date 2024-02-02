const express = require('express')
const model = require('../model');

const router = express.Router();

router.get('/movie', async (req, res) => {
    try{
        const data = await model.find();
        res.json(data);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/movie', async (req,res) => {
    const data = new model(
        {
            title: req.body.title,
            year: req.body.year,
            runTime: req.body.runTime,
            genre: req.body.genre,
            director: req.body.director,
            image: req.body.image
        }
    )

    try{
        const dataToSave = await data.save();
        res.status(201).json(dataToSave);
    }catch(err){
        res.status(400).json(
            {
                message: err.message
            }
            )}
})

module.exports = router;