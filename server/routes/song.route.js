const express = require("express");
const song_router = express.Router();
const controller = require("../controllers/index.js");
const authenticateToken = require("../middlewares/authenticate_token.js");


song_router.get("/songs", controller.song.getAll);
song_router.get("/songs/:id",authenticateToken, controller.song.getOne);
song_router.delete("/songs/:id",controller.song.delete);
song_router.patch("/songs/:id",authenticateToken, controller.song.update);
song_router.post("/songs",controller.song.post);


module.exports = song_router;
