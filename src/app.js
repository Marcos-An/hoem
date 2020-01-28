const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//CONECTANDO COM O MONGO
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//CORS
app.use(cors());

const imoveis = require('./model/imoveis');

//PASSAR INFOS PARA JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES

app.use('/api', require('./routes'));
app.use('/api/imoveis', require('./routes/imoveis'));

module.exports = app;
