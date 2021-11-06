const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//models attendus par le back de la part du front
const modelUser = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

modelUser.plugin(uniqueValidator);

//exportation du model pour le récupérer avec les controllers
module.exports = mongoose.model("user", modelUser);
