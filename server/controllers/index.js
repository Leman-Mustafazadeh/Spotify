const like_controller = require('./like.controller');
const music_controller = require('./music.controller');
const playlist_controller = require('./playlist.controller');
const search_controller = require('./search.controller');
const song_controller = require('./song.controller');
const user_controller = require('./user.controller');

const controller = {
    song: song_controller,
    playlist: playlist_controller,
    user: user_controller,
    search:search_controller,
    music:music_controller,
    like:like_controller

};

module.exports = controller;