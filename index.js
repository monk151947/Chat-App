var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/home/jagdish/Desktop/ruby/scoket/index.html');
});

io.on('connection', function(socket){
 socket.on('chat message', function(msg){
 io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
	console.log('listing on :3000');
});

