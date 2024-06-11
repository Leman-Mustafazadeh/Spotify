const express = require("express");
const user_router = express.Router();
const controller = require("../controllers/index");
const upload = require("../middlewares/user.register.middleware");
const authenticateToken = require("../middlewares/authenticate_token");

user_router.get("/user", controller.user.getAll);
user_router.get("/user/:id", authenticateToken, controller.user.getOne);
user_router.delete("/user/:id", controller.user.delete);
user_router.patch("/user/:id", controller.user.update);
user_router.post("/user", upload.single("src"), controller.user.register); //file upload middleware
user_router.post("/login", controller.user.user_login);
user_router.get("/verify/:token", controller.user.verify);


module.exports = user_router;
