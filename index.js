const websocketServer = require('./src/websocket-server');
const webServer = require('./src/web-server');
const logger = require('./config/winston');

websocketServer.init(logger);
webServer.init(logger);
