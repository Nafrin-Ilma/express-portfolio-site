const express = require("express")
const app = express()

// set view engine
app.set('view engine', 'ejs');

// get routes index page
app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(4200)