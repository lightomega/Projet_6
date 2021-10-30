const Sauce = require("../models/sauces");

exports.likeDislike = (req, res) => {
    const sauce = Sauce.findByIdAndUpdate(req.params.id);
    sauce.then((s) => {
        switch (req.body.like) {
            case 1:
                if (!s.usersLiked.includes(req.body.userId)) {
                    Sauce.updateOne(
                        {_id: s.id},
                        {
                            likes: s.likes + 1,
                            $push: {usersLiked: req.body.userId},
                        }
                    )
                        .then(() => res.status(200).json(s))
                        .catch((error) => res.status(400).json({error}));
                    console.log("j'aime cette sauce !");
                } else {
                    Sauce.updateOne()
                        .then((sauces) => res.status(200).json(sauces))
                        .catch((error) => res.status(400).json({error}));
                    console.log("Avis déjà donné ! liked")
                }
                break;

            case -1:
                if (!s.usersDisliked.includes(req.body.userId)) {
                    Sauce.updateOne(
                        {_id: s.id},
                        {
                            dislikes: s.dislikes + 1,
                            $push: {usersDisliked: req.body.userId},
                        }
                    )
                        .then((s) => res.status(200).json(s))
                        .catch((error) => res.status(400).json({error}));
                    console.log("je n'aime pas cette sauce !");
                } else {
                    Sauce.updateOne()
                        .then((s) => res.status(200).json(s))
                        .catch((error) => res.status(400).json({error}));
                        console.log("avis déjà donné ! Disliked");
                }
                break;

            case 0:
                let update = {};
                if (s.usersLiked.includes(req.body.userId)) {
                    update = {
                        likes: s.likes -1,
                        $pull: {usersLiked: req.body.userId},
                    };
                } else {
                    update = {
                        dislikes: s.dislikes - 1,
                        $pull: {usersDisliked: req.body.userId},
                    };
                }
                Sauce.updateOne({_id: s.id}, update)
                    .then(() => res.status(200).json(s))
                    .catch((error) => res.status(400).json({error}));
                console.log("Neutre");
                break;
        }
    });
};