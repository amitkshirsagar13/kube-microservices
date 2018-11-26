const express = require('express');
const cors = require('cors');
const config = require('../config');
const app = express();
app.use(cors());

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
}

app.use(ignoreFavicon);


const port = config.app.port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
