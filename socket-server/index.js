// run `node index.js` in the terminal
const express = require('express');
//const socket  = require('socket.io');
const app = express();
const port = 3000;

//console.log(`Hello Node.js v${process.versions.node}!`);
app.post('/send-notification', (req, res) => {
  const notify = { data: req.body };
  socket.emit('notification', notify);
  res.send(notify);
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://127.0.0.1:${port}`); // Server Connnected
});

const socket = requie('socket.io')(server);

socket.on('connection', (socket) => {
  console.log('Socket: client connected');
});
