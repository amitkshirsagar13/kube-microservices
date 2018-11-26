const express = require('express');
const config = require('../config');
const app = express();

const port = config.app.port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
