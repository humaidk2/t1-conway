const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; // 443

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const gameMap = [[1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0],
                [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
                [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0],
                [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1]];

io.on('connection', function(socket) {
  console.log('a user connected');

  // io.to('some room').emit('some event');
  socket.on('join', function(room) {
    console.log('a user joined a room:', room);
    socket.join(room);
    // io.to(room).emit('test', 'room message from server sent');

    socket.on('coordinates', function(coords) {
      socket.broadcast.to(room).emit('otherPlayerCoords', coords);
    });

    socket.on('pelletCollision', function(pelletId) {
      console.log('hit pellet collision in server', pelletId);
      socket.broadcast.to(room).emit('otherPlayerPelletCollision', pelletId);
    });

    socket.on('leave', function(room) {
      console.log('a user left the room:', room);
      socket.leave(room);
    })

  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

});

// MIDDLEWARE
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(express.static(path.join(__dirname, '/client')));
// app.use(flash());
setTimeout(function() {
  io.emit('gameMap', gameMap);
}, 15000);

http.listen(port, function() {
  console.log('Server is now connected on port ' + port);
}).on('error', function(err) {
  console.log('err:', err);
});
