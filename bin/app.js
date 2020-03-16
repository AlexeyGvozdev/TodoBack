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
  socket.emit('news', { hello: 'world' });
  socket.on('dis', function (data) {
    console.log(data);
  });
});

// io.sockets.on('dis', (socket) => {
//   console.log('disconnect');
// });
