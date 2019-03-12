const WebSocket = require('ws');

function init(logger, config) {
  logger.info('Initializing websocket server');
  const wss = new WebSocket.Server({ port: config.webSocketPort });

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      logger.info('received: %s', message);
    });

    ws.send('something');
  });

  function broadcast(data) {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }

  setInterval(() => broadcast(new Date().toTimeString()), 1000);
}

module.exports = {
  init
};
