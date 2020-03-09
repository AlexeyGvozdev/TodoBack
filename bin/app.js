const handler = require('../helpers/handlerRequest');
require('../config')();
require('../helpers/mongooseConnect')();
const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const nconf = require('nconf');

app.listen(nconf.get('port'), () => {
  console.log('start server');
});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
