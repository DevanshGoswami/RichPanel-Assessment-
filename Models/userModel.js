
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    userID: String,
    picture: String,
    accessToken: String
});


module.exports = mongoose.model("User",userSchema);