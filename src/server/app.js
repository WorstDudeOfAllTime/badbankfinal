const express = require('express');
const app = express();
const bankRouter = require('./routes/bankRoutes');

app.use(express.json());

app.use('/', bankRouter);

module.exports=app;