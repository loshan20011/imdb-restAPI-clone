require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const mongoString = process.env.DATABASE_URL;

const app = express();

app.use(express.json());

app.use('/api',routes)

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('connected', () => {
    console.log('Database connected')
})

database.error('error', (err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('server started at port 3000')
})