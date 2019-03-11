const WebSocket = require('ws');

function init() {
    console.log('Initializing websocket server');
    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        ws.send('something');
    });

    function broadcast(data) {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    };

    setInterval(() => broadcast(new Date().toTimeString()), 1000);
}

module.exports = {
    init
};
