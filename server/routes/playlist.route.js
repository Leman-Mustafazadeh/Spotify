const express = require("express");
const playlist_router = express.Router();
const controller = require("../controllers/index");

playlist_router.get("/playlist", controller.playlist.getAll);
playlist_router.get("/playlist/:id", controller.playlist.getOne);
playlist_router.delete("/playlist/:id", controller.playlist.delete);
playlist_router.patch("/playlist/:id", controller.playlist.update);
playlist_router.post("/playlist", controller.playlist.post);


module.exports = playlist_router;
