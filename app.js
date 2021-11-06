/* 
    File Name: Express portfolio site
    Student Name: Nafrin Ilma Abdullah
    Student ID: 301156573
    Date: 11/10/2021
*/
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// get static files
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// get routes index page
app.get('/', (req, res, next) => {
    res.render('index');
});

app.post('/login', function(req, res) {
    res.render('login');
  });

const viewRoutes = require('./public/javascripts/index');

app.use('/', viewRoutes);

// catch 404
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error', { title: 'Error' });
});

app.listen(process.env.PORT || 4200);