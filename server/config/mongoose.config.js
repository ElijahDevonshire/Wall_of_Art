const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/wall_of_art", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
        console.log("Something went wrong when connection to the database", err)
    );