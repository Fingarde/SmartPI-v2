var http = require('http').createServer();
var io = require('socket.io')(http);
const { spawn } = require('child_process');

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('script', (data) => {
    spawn('./script/' + data + ".sh");
  })
});

http.listen(5000, () => {
  console.log('listening on *:5000');
});