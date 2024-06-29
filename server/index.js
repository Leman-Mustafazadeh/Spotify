const app = require('./config/index');

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router.song);
app.use(router.playlist);
app.use(router.user);
app.use(router.music);
app.use(router.like);


