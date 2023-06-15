const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
})
//creation du model Person
const User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema)