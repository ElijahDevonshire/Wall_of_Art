const artCtrl = require("../controllers/art.controller");
module.exports = (app) => {
    app.get("/api/artcheck", artCtrl.artcheck);
    app.post("/api/art", artCtrl.addNewArt);
    app.get("/api/art", artCtrl.getAllArt);
    app.get("/api/art/:id", artCtrl.getArtById);
    app.delete("/api/art/:id", artCtrl.deleteArt);
    app.put("/api/art/:id", artCtrl.updateArt);
};