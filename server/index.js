const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const bodyParser = require('body-parser');

const app = express();

const router = require("./routes");

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Server works!!!');
});

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});