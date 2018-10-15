// src/articleModel.js

const mongoose = require("mongoose");

// Save reference to Schema constructor
const Schema = mongoose.Schema;

// Create new ArticleSchema object
var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        trim: true,
        required: "Url is Required"
    }
});

// Create model from schema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
