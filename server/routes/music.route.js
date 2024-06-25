const express = require("express");
const music_router = express.Router();
const controller = require("../controllers/index");

music_router.get("/music", controller.music.getAll);
music_router.get("/music/:id", controller.music.getOne);
music_router.delete("/music/:id", controller.music.delete);
music_router.patch("/music/:id", controller.music.update);
music_router.post("/music", controller.music.post);


module.exports = music_router;
