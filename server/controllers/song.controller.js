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
    try {
      const song = new SongModel(req.body);

      if (req.files && req.files.musicSrc && req.files.imgSrc) {
        const audio = "http://localhost:6060/uploads/" + req.files.musicSrc[0].filename;
        song.musicSrc = audio;
        const img = "http://localhost:6060/uploads/" + req.files.imgSrc[0].filename;
        song.imgSrc = img;
      }
      await song.save();
      res.status(201).json({
        message: "posted",
        data: song,
      });
    } catch (error) {
      console.log(error);
      res.json({
        error: error.message,
      });
    }
  },
};

module.exports = song_controller;

