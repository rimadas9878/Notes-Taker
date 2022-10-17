const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouterRouter = require('./apiRoute');

const app = express();

app.use('/notes', apiRouterRouter);

module.exports = app;
