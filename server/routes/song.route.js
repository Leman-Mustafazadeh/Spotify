const express = require("express");
const song_router = express.Router();
const controller = require("../controllers/index.js");
const authenticateToken = require("../middlewares/authenticate_token.js");
const upload = require("../middlewares/song.middleware.js");

song_router.get("/songs", controller.song.getAll);
song_router.get("/songs/:id", authenticateToken, controller.song.getOne);
song_router.delete("/songs/:id", controller.song.delete);
song_router.patch("/songs/:id", authenticateToken, controller.song.update);

// Use upload middleware to handle file uploads
song_router.post(
  "/songs",
  upload.fields([
    { name: "musicSrc", maxCount: 1 },
    { name: "imgSrc", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  controller.song.post
);

module.exports = song_router;
