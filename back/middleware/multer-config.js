//middleware de multer qui va permettre d'accepter les images
const multer = require("multer");

//définitions des extensions d'image
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

//enregistrement des fichiers images sur le disque
const storage = multer.diskStorage({
  //destination des fichiers enregistrés
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  //renommage des fichiers enregistrés
  filename: (req, file, callback) => {
    //partie avant l'extension, si il y a des espaces on les remplace par underscore
    const name = file.originalname.split(" ").join("_");
    //partie extension que l'on génère grace au MIME_TYPES défini plus haut
    const extension = MIME_TYPES[file.mimetype];
    //appel du callback, sans erreur, avec création du nom unique grace a un timestanmp
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("image");
