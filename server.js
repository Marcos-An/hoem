console.log('OK');
const express = require('express');
const dotenv = require('dotenv').config();
const app = require('./src/app');
const http = require('http');
const path = require('path');

const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const path = require('path');
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

server.listen(process.env.PORT || 3001);
