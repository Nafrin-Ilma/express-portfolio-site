const express = require("express")
const app = express()

// set view engine
app.set('view engine', 'ejs');

// get routes index page
app.get('/', (req, res, next) => {
    res.render('index')
});

const  viewRoutes = require('./routes/index')

app.use('/', viewRoutes)

app.listen(4200)