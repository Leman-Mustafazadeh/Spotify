const mongoose = require("mongoose");
const searchSchema = require("../schemas/search.schema");

const SearchModel = mongoose.model("Search", searchSchema);

module.exports = SearchModel;