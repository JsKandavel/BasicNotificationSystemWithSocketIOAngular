const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json()) 

// Send Notification API
app.post('/send-notification', (req, res) => {
  //console.log('request', req);
      console.log('request.body',req.body);
  const notify = { data: req.body };
  socket.emit('notification', notify); // Updates Live Notification
  console.log('notification', notify);
  res.send('test');
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://127.0.0.1:${port}`); // Server Connnected
});
// Socket Layer over Http Server
const socket = require('socket.io')(server, {cors: {origin: "*"}});
// On every Client Connection
socket.on('connection', (socket) => {
  console.log('Socket: client connected');
});
