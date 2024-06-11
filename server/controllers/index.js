const playlist_controller = require('./playlist.controller');
const song_controller = require('./song.controller');
const user_controller = require('./user.controller');

const controller = {
    song: song_controller,
    playlist: playlist_controller,
    user: user_controller
};

module.exports = controller;