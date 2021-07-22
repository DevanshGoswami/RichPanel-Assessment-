
var mongoose = require("mongoose");
var pagesSchema = require('./pagesModel');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    userID: String,
    picture: String,
    accessToken: String,
    pages: [pagesSchema]
});


module.exports = mongoose.model("User",userSchema);