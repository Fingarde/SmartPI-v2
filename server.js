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

/*var http = require('http');
var url = require('url');
var fs = require('fs')
var querystring = require('querystring');
const { spawn } = require('child_process');

var server = http.createServer((req, res) => {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);

    res.writeHead(200);

    console.log(page.split('/')[0])

    try {
        if(page == '/favicon.ico') return
        if(page.split('/')[1] == 'script') {
            spawn('./script/' + page.split('/')[2] + ".sh");
        }

        res.write(fs.readFileSync('web' + page));
    }
    catch (e) {
        res.write(fs.readFileSync('web/index.html'));
    }

    res.end();    
});

server.listen(8080);
*/