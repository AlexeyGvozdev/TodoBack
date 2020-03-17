const handler = require('../helpers/handlerRequest');
const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const nconf = require('../config');

app.listen(nconf.get('port'), () => {
  console.log('start server');
  console.log(nconf.get('port'));
});

io.on('connection', (socket) => {
  console.log('connection');
  socket.emit('news', 'world');
  socket.on('dis', function (data) {
    console.log(data);
    socket.emit('news', 'hello android');
  });
  socket.on('disconnect', (socket) => {
    console.log('disconnect');
  });
});
