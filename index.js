var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.get('/', function(req, res){
  res.render('index.html');
});

io.on('connection', function(socket){
 socket.on('chat message', function(msg){
 io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 5000);

