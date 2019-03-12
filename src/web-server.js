const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

function init(logger) {
  app.use('/', express.static(path.join(__dirname, '../public')));

  app.listen(port, () => logger.info(`Web app listening on http://localhost:${port}`));
}

module.exports = {
  init
};
