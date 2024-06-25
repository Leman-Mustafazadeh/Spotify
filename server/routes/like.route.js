const express = require("express");
const like_router = express.Router();
const controller = require("../controllers/index.js");
const authenticateToken = require("../middlewares/authenticate_token.js");
const upload = require("../middlewares/like.middleware.js");

like_router.get("/like", controller.like.getAll);
like_router.get("/like/:id", authenticateToken, controller.like.getOne);
like_router.delete("/like/:id", controller.like.delete);
like_router.patch("/like/:id", authenticateToken, controller.like.update);

// Use upload middleware to handle file uploads
like_router.post(
  "/like",
  upload.fields([
    { name: "musicSrc", maxCount: 1 },
    { name: "imgSrc", maxCount: 1 },
  ]),
  controller.like.post
);

module.exports = like_router;
