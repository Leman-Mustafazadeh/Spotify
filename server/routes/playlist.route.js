const express = require("express");
const playlist_router = express.Router();
const controller = require("../controllers/index");

playlist_router.get("/playlists", controller.playlist.getAll);
playlist_router.get("/playlists/:id", controller.playlist.getOne);
playlist_router.delete("/playlists/:id", controller.playlist.delete);
playlist_router.patch("/playlists/:id", controller.playlist.update);
playlist_router.post("/playlists", controller.playlist.post);


module.exports = playlist_router;
