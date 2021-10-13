/* 
    File Name: Express portfolio site
    Student Name: Nafrin Ilma Abdullah
    Student ID: 301156573
    Date: 11/10/2021
*/

var express = require('express');
var router = express.Router();

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