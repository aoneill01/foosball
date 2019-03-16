const WebSocket = require('ws');
const GameState = require('./game-state');

function init(logger, config) {
  logger.info('Initializing websocket server');
  const wss = new WebSocket.Server({ port: config.webSocketPort });
  const state = new GameState();

  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      logger.info('received: %s', message);
    });
  });

  function broadcast(data) {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }

  // eslint-disable-next-line no-plusplus
  setInterval(() => {
    state.step();
    broadcast(JSON.stringify(state.toJson()));
  }, 50);
}

module.exports = {
  init
};
