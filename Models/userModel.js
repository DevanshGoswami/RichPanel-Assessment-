
var mongoose = require("mongoose");


var pagesSchema = new mongoose.Schema({
    name: String,
    category: String,
    id: String,
    access_token: String,
    hooksInstalled: {
        type: Boolean,default:false
    }
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    userID: String,
    picture: String,
    accessToken: String,
    pages: [pagesSchema]
});


module.exports = mongoose.model("User",userSchema);