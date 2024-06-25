const mongoose = require("mongoose");
const userSchema = require('../schemas/user.schema');

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;



//users {id: 1, username: 'kenan', pass: 1},{id: 1, username: 'kenan', pass: 1, verify: 1}, {pid: 1, pusername: 'kenan', pass: 1, verify: 1}