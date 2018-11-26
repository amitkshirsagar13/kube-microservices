const express = require('express');
const cors = require('cors');
const config = require('../config');
const app = express();
app.use(cors());

const port = config.app.port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
