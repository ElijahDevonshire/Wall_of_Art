const mongoose = require("mongoose");

const ArtSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
        minlength: [1, "Must have a Title!"],
    },
    description: {
        type: String,
        require: [true, "Description is required"],
        minlength: [1, "Must a Description!"],
    },
    artist: {
        type: String,
        require: [true, "Artist is required"],
        minlength: [1, "Must have an artist!"],
    },
    image: {
        type: String,
        require: [true, "Art Piece is required"],
        minlength: [1, "Need an image!"],
    },
});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;