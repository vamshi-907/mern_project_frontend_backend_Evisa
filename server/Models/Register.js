const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username:String,
    gmail:String,
    password:String,
    phone_number:String,
    dob:Date
   
});

module.exports = mongoose.model('registerSchema',RegisterSchema);