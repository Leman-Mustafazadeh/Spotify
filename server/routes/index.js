const playlist_router = require('./playlist.route');
const song_router = require('./song.route');
const user_router = require('./user.route');


const router = {
    song:song_router,
    user: user_router,
    playlist: playlist_router
}

module.exports = router;