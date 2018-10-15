// server.js

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// var Article = require("./src/models/articleModel");

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/schemaarticle", { useNewUrlParser: true });

// var data = {
//     title: "Dummy Article Seed Test",
//     date: newDate(Date.now()),
//     url: "article.com"
// };

// Article.create(data)
//     .then(function(dbArticle) {
//         console.log(dbArticle);
//     })
//     .catch(function(err) {
//         console.log(err.message);
//     });