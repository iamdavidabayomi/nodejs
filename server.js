const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('ESP8266 Connected');

    ws.on('message', (message) => {
        console.log(`Received from ESP8266: ${message}`);
        ws.send(`Echo: ${message}`); // Send back the same message
    });

    ws.on('close', () => {
        console.log('ESP8266 Disconnected');
    });
});

console.log('WebSocket server running on ws://localhost:8080');
