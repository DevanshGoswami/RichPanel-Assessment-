var mongoose = require('mongoose');

var pagesSchema = new mongoose.Schema({
    name: String,
    category: String,
    id: String,
    access_token: String
});

module.exports = mongoose.model("Pages",pagesSchema);