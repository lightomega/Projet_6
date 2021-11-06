//modules nécéssaires au server
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//récupération des routes
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

//connexion à la db
mongoose
  .connect(
    "mongodb+srv://Alexandre:UKzRkttQ8IINTlVx@cluster0.arxda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

//début des routes pour raccourcir l'écriture dans routes.js
app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);


module.exports = app;
