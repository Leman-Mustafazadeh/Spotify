const PlaylistModel = require('../models/playlist.model');

const playlist_controller = {
  getAll: async (req, res) => {
    const { title } = req.query;
    let list;
    if (title) list = await PlaylistModel.find({ title: title });
    else list = await PlaylistModel.find();

    if (list.length > 0) {
      res.status(200).send({
        message: "success",
        data: list,
      });
    } else {
      res.status(204).send({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let lists;
    try {
      lists = await PlaylistModel.findById(id);
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
      response = await PlaylistModel.findByIdAndDelete(id);
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
    const response = await PlaylistModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const lists = new PlaylistModel(req.body);
    await lists.save();
    res.send({
      message: "posted",
      data: lists,
    });
  },
};

module.exports = playlist_controller;
