const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; // 443

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const gameMap = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

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
/*
Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
setInterval(function() {
  let changes = [];
  for(var i = 0;i < gameMap.length;i++) {
    for(var j = 0;j < gameMap[i].length;j++) {
      if(gameMap[i][j] === 1) {
        let total = 0;
        if(i - 1 >= 0) {
          total += gameMap[i - 1][j];
        } 
        if(j - 1 >= 0) {
          total += gameMap[i][j - 1];
        }
        if(i - 1 >= 0 && j - 1 >= 0) {
          total += gameMap[i - 1][j - 1];
        } 
        if(i + 1 <= gameMap.length - 1) {
          total += gameMap[i + 1][j];
        } 
        if(j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i][j + 1];
        }
        if(i + 1 <= gameMap.length - 1 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i + 1][j + 1];
        } 
        if(i + 1 <= gameMap.length - 1 && j - 1 >= 0) {
          total += gameMap[i + 1][j - 1];
        } 
        if(i - 1 >= 0 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i - 1][j + 1];
        } 
        if(total < 2) {
          changes.push([i, j, 0]);
        } else if(total > 3) {
          changes.push([i, j, 0]);
        }
      } else {
        let total = 0;
        if(i - 1 >= 0) {
          total += gameMap[i - 1][j];
        } 
        if(j - 1 >= 0) {
          total += gameMap[i][j - 1];
        }
        if(i - 1 >= 0 && j - 1 >= 0) {
          total += gameMap[i - 1][j - 1];
        } 
        if(i + 1 <= gameMap.length - 1) {
          total += gameMap[i + 1][j];
        } 
        if(j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i][j + 1];
        }
        if(i + 1 <= gameMap.length - 1 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i + 1][j + 1];
        } 
        if(i + 1 <= gameMap.length - 1 && j - 1 >= 0) {
          total += gameMap[i + 1][j - 1];
        } 
        if(i - 1 >= 0 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i - 1][j + 1];
        } 
        if(total === 3) {
          changes.push([i, j, 1]);
        }
      }
    }
  }
  for(let i = 0;i < changes.length;i++) {
    gameMap[changes[i][0]][changes[i][1]] = changes[i][2];
  }
  io.emit('gameMap', gameMap);
}, 1000);

http.listen(port, function() {
  console.log('Server is now connected on port ' + port);
}).on('error', function(err) {
  console.log('err:', err);
});
