const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

function init() {
    app.use('/', express.static(path.join(__dirname, '../public')));

    app.listen(port, () => console.log(`Web app listening on http://localhost:${port}`));
}

module.exports = {
    init
};
