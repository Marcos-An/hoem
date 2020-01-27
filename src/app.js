const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//CONECTANDO COM O MONGO
mongoose.connect(
  'mongodb+srv://admin:123@hoem-ij4ev.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

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
