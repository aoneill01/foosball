const express = require('express');
const path = require('path');
const logger = require('../config/winston');

const app = express();
const port = 3000;

function init() {
  app.use('/', express.static(path.join(__dirname, '../public')));

  app.listen(port, () => logger.info(`Web app listening on http://localhost:${port}`));
}

module.exports = {
  init
};
