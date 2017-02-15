var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    // 监听事件chat message
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });

    //监听用户退出
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
