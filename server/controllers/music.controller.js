const MusicModel = require('../models/music.model');

const music_controller = {
  getAll: async (req, res) => {
    const { title } = req.query;
    let list;
    if (title) list = await MusicModel.find({ title: title });
    else list = await MusicModel.find();

    if (list.length > 0) {
      res.json({
        message: "success",
        data: list,
      });
    } else {
      res.json({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let lists;
    try {
      lists = await MusicModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (lists) {
      res.status(200).send({
        message: "success",
        data: lists,
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
      response = await MusicModel.findByIdAndDelete(id);
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
    const response = await MusicModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const lists = new MusicModel(req.body);
    await lists.save();
    res.send({
      message: "posted",
      data: lists,
    });
  },
};

module.exports = music_controller;