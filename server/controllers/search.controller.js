const SearchModel = require("../models/search.model");

const search_controller = {
  getAll: async (req, res) => {
    const songs = await SearchModel.find();

    if (songs.length > 0) {
      res.status(200).send({
        message: "success",
        data: songs,
      });
    } else {
      res.send({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let song;
    try {
      song = await SearchModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (song) {
      res.status(200).send({
        message: "success",
        data: song,
      });
    } else {
      res.send({
        message: "no content",
        data: null,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await SearchModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error,
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const response = await SearchModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const song = new SearchModel(req.body);
    await song.save();
    res.send({
      message: "posted",
      data: song,
    });
  },
};

module.exports = search_controller;
