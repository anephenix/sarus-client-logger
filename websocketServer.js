// NPM Dependencies
const http = require('http');
// const httpShutdown = require('http-shutdown');
const WebSocket = require('ws');

// const { wsPort } = require('./config');
const wsPort = 3001;

// Setup the server
const server = http.createServer();
const wss = new WebSocket.Server({ server });

// This simply prints out a message
const messageParser = message => {
  console.log('received: %s', message);
};

// This broadcasts the message to all open clients
const broadcast = data => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send(data);
  });
};

// TODO - how to handle subscribe/unsubscribe requests

// This handles connecting to the client
const handleConnection = ws => {
  // connection established, we log a message on the server
  console.log('connection opened');

  // Handle how messages are parsed when received from the client
  ws.on('message', messageParser);

  // Send something to the client
  const data = { connections: wss._server._connections };
  // console.log(data);
  // // How to send to all open connections
  broadcast(JSON.stringify(data));

  ws.on('close', () => {
    console.log('connection closed');
    const newData = { connections: wss._server._connections };
    broadcast(JSON.stringify(newData));
  });
};

// Binds on handling the connection
wss.on('connection', handleConnection);

server.listen(wsPort, () => {
  console.log(`Websocket Server is listening on port ${wsPort}`);
});

module.exports = server;
