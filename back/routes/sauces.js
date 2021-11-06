//modules nécéssaires aux routes
const express = require("express");
const router = express.Router();

//récupération des controllers
const saucesCtrl = require("../controllers/sauces");
const likeDislikeCtrl = require("../controllers/likes-dislikes")

//récupération des middleware d'authentification et d'images
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

//routes sauces raccourcies grace a app.js dans lesquelles on integre les middlewares nécéssaires
router.post("/", auth, multer, saucesCtrl.createSauces);
router.put("/:id", auth, multer, saucesCtrl.modifySauces);
router.delete("/:id", auth, saucesCtrl.deleteSauces);
router.get("/:id", auth, saucesCtrl.getOneSauces);
router.get("/", auth, saucesCtrl.getAllSauces);
router.post("/:id/like", likeDislikeCtrl.likeDislike)

module.exports = router;
