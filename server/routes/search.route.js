const express = require("express");
const search_router = express.Router();
const controller = require("../controllers/index.js");
const authenticateToken = require("../middlewares/authenticate_token.js");


search_router.get("/search", controller.search.getAll);
search_router.get("/search/:id",authenticateToken, controller.search.getOne);
search_router.delete("/search/:id",controller.search.delete);
search_router.patch("/search/:id",authenticateToken, controller.search.update);
search_router.post("/search",controller.search.post);


module.exports = search_router;
