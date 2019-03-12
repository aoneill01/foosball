const config = require('config').get('foosball');

const websocketServer = require('./src/websocket-server');
const webServer = require('./src/web-server');
const logger = require('./src/util/winston');

websocketServer.init(logger, config);
webServer.init(logger, config);
