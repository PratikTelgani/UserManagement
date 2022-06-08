const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Gender: String,
    Status: String
})

const User = mongoose.model('User',UserSchema);
module.exports = User