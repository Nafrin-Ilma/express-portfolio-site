/* 
    File Name: Express portfolio site
    Student Name: Nafrin Ilma Abdullah
    Student ID: 301156573
    Date: 11/10/2021
*/
const express = require("express");
const app = express();

// get static files
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

// get routes index page
app.get('/', (req, res, next) => {
    res.render('index');
});

const viewRoutes = require('./public/javascripts/index');

app.use('/', viewRoutes);

app.listen(process.env.PORT || 4200);