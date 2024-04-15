const WebSocket = require('ws');

// WebSocket client setup
const ws = new WebSocket('ws://localhost:8080');

// Event handler for successful connection
ws.on('open', function open() {
    console.log('Connected to WebSocket server');
});

// Event handler for incoming messages from server
ws.on('message', function incoming(data) {
    console.log('Received message from server:', data.toString('utf-8'));
});

// Event handler for connection closure
ws.on('close', function close() {
    console.log('Disconnected from WebSocket server');
});

// Event handler for connection errors
ws.on('error', function error(err) {
    console.error('WebSocket error:', err.message);
});