var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/game.html');
});

var games = Array;


io.on('connection', function(socket){
    socket.on('box-ticked', function(data){
        io.emit('box-ticked', data);
    });

    socket.on('new-game', function(data) {
        io.emit('game-created', "recieved");
    });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});