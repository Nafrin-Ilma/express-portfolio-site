/* 
    File Name: Express portfolio site
    Student Name: Nafrin Ilma Abdullah
    Student ID: 301156573
    Date: 11/10/2021
*/

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const contactLists = require('../../models/contactLists');

let ContactLists = require('../../models/contactLists')

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

/* GET error page */
router.get('/404', function(req, res, next) {
  res.render('error', 
  { title: 'Error' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('login', 
  { title: 'Login' });
});

/* GET contact lists page */
router.get('/get-contacts', (req, res, next) => {
  ContactLists.find((error, contactList) => {
    if (error) {
      return console.error(error);
    } else {
      console.log(contactList)
      res.render('contactsList', 
      { title: 'Contacts List' , ContactList: contactList.sort((a, b) => a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1)});
    }
  });
});

/* GET update contact page */
router.get('/update-contact/:id', function(req, res, next) {
  let id = req.params.id;

  ContactLists.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('updateContact', 
      { title: 'Update Contact', contact: contactToEdit });
    }
  })
});

/* POST update contact page */
router.post('/update-contact/:id', (req, res, next) => {
  const id = req.params.id;

  const updateContact = ContactLists({
    "username": req.body.username,
    "password": req.body.password,
    "email_address": req.body.email_address,
    "contact_name": req.body.contact_name,
    "contact_number": req.body.contact_number
  });

  ContactLists.updateOne({_id: id}, updateContact, (error) => {
    if (error) {
      console.log(error);
      res.end(error);
    } else {
      res.redirect('/get-contacts');
    }
  })
});

/* DELETE function */
router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id;

  ContactLists.remove({_id: id}, (error) => {
    if (error) {
      console.log(error);
      res.end(error);
    } else {
      res.redirect('/get-contacts');
    }
  })
})

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