const SongModel = require("../models/song.model");

const song_controller = {
  getAll: async (req, res) => {
    const songs = await SongModel.find();

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
      song = await SongModel.findById(id);
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
      response = await SongModel.findByIdAndDelete(id);
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
    const response = await SongModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const song = new SongModel(req.body);
    await song.save();
    res.send({
      message: "posted",
      data: song,
    });
  },
};

module.exports = song_controller;
