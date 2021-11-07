let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    username: String,
    password: String,
    email_address: String,
    contact_name: String,
    contact_number: String
},
{
    collection: 'user'
});

module.exports = mongoose.model('Contact', contactModel);