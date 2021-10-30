const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
const likeDislikeCtrl = require("../controllers/likes-dislikes")

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, saucesCtrl.createSauces);
router.put("/:id", auth, multer, saucesCtrl.modifySauces);
router.delete("/:id", auth, saucesCtrl.deleteSauces);
router.get("/:id", auth, saucesCtrl.getOneSauces);
router.get("/", auth, saucesCtrl.getAllSauces);
router.post("/:id/like", likeDislikeCtrl.likeDislike)

module.exports = router;
