/* 
    File Name: Express portfolio site
    Student Name: Nafrin Ilma Abdullah
    Student ID: 301156573
    Date: 11/10/2021
*/

let express = require('express');
let router = express.Router();

// // modules for authentication
// let session = require('express-session');
// let passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home' });
});

/* GET about page. */
router.get('/about-me', function(req, res, next) {
  res.render('about', 
  { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', 
  { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', 
  { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contact', 
  { title: 'Contact' });
});

module.exports = router;

// //setup express session
// app.use(session({
//   secret: "SomeSecret",
//   saveUninitialized: false,
//   resave: false
// }));

// // initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

// // passport user configuration

// // create a User Model Instance
// let userModel = require('../models/user');
// let User = userModel.User;

// // implement a User Authentication Strategy
// passport.use(User.createStrategy());

// // serialize and deserialize the User info
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());