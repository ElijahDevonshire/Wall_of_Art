const Art = require("../models/art.model");

const artcheck = (req, res) => {
    res.json({ msg: "ALL GOOD" });
};

const addNewArt = (req, res) => {
    console.log("gets here");
    const { body } = req;
    Art.create(body)
    .then(newArtDoc => {
        res.json({ newArtDoc });
    })
    .catch((err) => res.status(400).json({ err }));

};

const getAllArt = (req, res) => {
    Art.find()
        .then((allArt) => res.json(( allArt )))
        .catch((err) => res.status(400).json({ err }));

};

const getArtById = (req, res) => {
    Art.findOne({ _id: req.params.id })
    .then((queriedArt) => res.json( queriedArt ))
    .catch((err) => res.status(400).json({ err }));
}

const deleteArt = (req, res) => {
    Art.deleteOne({_id: req.params.id})
    .then(response => res.json({response}))
    .catch((err) => res.status(400).json({ err }));
}

const updateArt = (req, res) => {
    Art.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
    .then(newArtDoc => res.json({ newArtDoc }))
    .catch((err) => res.status(400).json({ err }));

}

module.exports = {
    artcheck,
    addNewArt,
    getAllArt,
    getArtById,
    deleteArt,
    updateArt,
};