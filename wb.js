const fs = require('fs');
const WebSocket = require('ws');

const LOG_FILE_PATH = './logfile.txt';

const wss = new WebSocket.Server({port:8080});

function sendInitialLogData(ws) {
    fs.readFile(LOG_FILE_PATH,'utf-8',(err,data)=> {
        if(err) throw err;
        const lines = data.trim().split('\n');
        const lastlines = lines.slice(-10);
        lastlines.forEach(line => {
            ws.send(line);
        });
    });
}

wss.on('connection', function connection(ws) {
    console.log('Client Connected');
    sendInitialLogData(ws);

    fs.watchFile(LOG_FILE_PATH, (curr, prev) => {
        if (curr.mtime > prev.mtime) {
            fs.readFile(LOG_FILE_PATH, 'utf8', (err, data) => {
                if (err) throw err;
                const lines = data.trim().split('\n');
                const newLines = lines.slice(-10); // Get the last 10 lines
                newLines.forEach(line => {
                    ws.send(line);
                });
            });
        }
    });

});