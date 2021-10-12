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

const  viewRoutes = require('./routes/index');

app.use('/', viewRoutes);

app.listen(4200);