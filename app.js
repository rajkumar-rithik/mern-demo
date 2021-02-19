const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

const projectRoute = require('./routes/project');

app.use('/project', projectRoute);

app.get('/', (req, res) => {
    res.send('home');
});

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
});

app.listen(3001);