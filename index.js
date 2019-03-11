const websocketServer = require('./src/websocket-server');
const webServer = require('./src/web-server');

websocketServer.init();
webServer.init();
