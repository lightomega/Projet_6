//modules nécéssaires aux routes
const express = require("express");
const router = express.Router();

//récupération du controller nécéssaire
const userCtrl = require("../controllers/user");

//routes user raccourcies grace a app.js
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
