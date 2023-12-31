const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    ClientNumber: Number,
    DOB: Date,
    Email: String,
    Address: String,
    Payment: Number,
    FirstName: String,
    LastName: String,
    Gender: String,
    AadharNumber: Number,
    MotherName: String
});

module.exports = mongoose.model('Client', ClientSchema);
