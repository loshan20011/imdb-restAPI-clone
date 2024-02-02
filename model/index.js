const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema(
    {
        title: {
            required: true,
            type: String,
        },
        year: {
            required: true,
            type: String,
        },
        runTime: {
            required: true,
            type: String,
        },
        genre: {
            required: true,
            type: String,
        },
        director: {
            required: true,
            type: String,
        },
        image: {
            required: true,
            type: Array,
        }
    }
)

module.exports = mongoose.model('imdb', dataSchema)