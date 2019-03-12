const express = require('express');
const path = require('path');

const app = express();

function init(logger, config) {
  app.use('/', express.static(path.join(__dirname, '../public')));

  app.listen(config.webServerPort, () =>
    logger.info(`Web app listening on http://localhost:${config.webServerPort}`)
  );
}

module.exports = {
  init
};
