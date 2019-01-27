const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const storiesRouter = require('./routes/stories');

const app = express();

app.use(logger('dev'));
app.use(cors()); // wasn't being called :(
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/stories', storiesRouter);

module.exports = app;
