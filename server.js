const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; // 443

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

let gameMap = [[[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']],
              [[0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)'], [0, 'rgb(219, 200, 200)']]];

io.on('connection', function(socket) {
  console.log('a user connected');

  // io.to('some room').emit('some event');
  socket.on('join', function(room) {
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
  socket.on('click', function(i, j, color) {
    gameMap[i][j] = [1, color];
    io.emit('gameMap', gameMap);
  })
  socket.on('get', function(newMap) {
    gameMap = newMap
    io.emit('gameMap', gameMap);
  })

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
      if(gameMap[i][j][0] === 1) {
        let total = 0;
        if(i - 1 >= 0) {
          total += gameMap[i - 1][j][0];
        } 
        if(j - 1 >= 0) {
          total += gameMap[i][j - 1][0];
        }
        if(i - 1 >= 0 && j - 1 >= 0) {
          total += gameMap[i - 1][j - 1][0];
        } 
        if(i + 1 <= gameMap.length - 1) {
          total += gameMap[i + 1][j][0];
        } 
        if(j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i][j + 1][0];
        }
        if(i + 1 <= gameMap.length - 1 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i + 1][j + 1][0];
        } 
        if(i + 1 <= gameMap.length - 1 && j - 1 >= 0) {
          total += gameMap[i + 1][j - 1][0];
        } 
        if(i - 1 >= 0 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i - 1][j + 1][0];
        } 
        if(total < 2) {
          changes.push([i, j, 0, 'rgb(219, 200, 200)']);
        } else if(total > 3) {
          changes.push([i, j, 0, 'rgb(219, 200, 200)']);
        }
      } else {
        let total = 0;
        let colors = [];
        if(i - 1 >= 0) {
          total += gameMap[i - 1][j][0];
          colors.push(gameMap[i - 1][j][1]);
        } 
        if(j - 1 >= 0) {
          total += gameMap[i][j - 1][0];
          colors.push(gameMap[i][j - 1][1]);
        }
        if(i - 1 >= 0 && j - 1 >= 0) {
          total += gameMap[i - 1][j - 1][0];
          colors.push(gameMap[i - 1][j - 1][1]);
        } 
        if(i + 1 <= gameMap.length - 1) {
          total += gameMap[i + 1][j][0];
          colors.push(gameMap[i + 1][j][1]);
        } 
        if(j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i][j + 1][0];
          colors.push(gameMap[i][j + 1][1]);
        }
        if(i + 1 <= gameMap.length - 1 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i + 1][j + 1][0];
          colors.push(gameMap[i + 1][j + 1][1]);
        } 
        if(i + 1 <= gameMap.length - 1 && j - 1 >= 0) {
          total += gameMap[i + 1][j - 1][0];
          colors.push(gameMap[i + 1][j - 1][1]);
        } 
        if(i - 1 >= 0 && j + 1 <= gameMap[i].length - 1) {
          total += gameMap[i - 1][j + 1][0];
          colors.push(gameMap[i - 1][j + 1][1]);
        } 
        if(total === 3) {
          let colorx = 0;
          let colory = 0;
          let colorz = 0;
          let colorsLength = 0;
          for(let k = 0;k < colors.length;k++) {
            let color = colors[k].slice(4, colors[k].length - 1);
            color = color.split(',');
            if(Number(color[0] !== color[1] && color[1] !== color[2] && color[2] !== '256')) {
              colorx += Math.pow(Number(color[0]), 2);
              colory += Math.pow(Number(color[1]), 2);
              colorz += Math.pow(Number(color[2]), 2);
              colorsLength++;
            }
          }
          colorx = Math.floor(Math.sqrt(Math.floor(colorx / colorsLength)));
          colory = Math.floor(Math.sqrt(Math.floor(colory / colorsLength)));
          colorz = Math.floor(Math.sqrt(Math.floor(colorz / colorsLength)));
          changes.push([i, j, 1, 'rgb(' + colorx + ',' + colory + ',' + colorz + ')']);
        }
      }
    }
  }
  for(let i = 0;i < changes.length;i++) {
    gameMap[changes[i][0]][changes[i][1]][0] = changes[i][2];
    gameMap[changes[i][0]][changes[i][1]][1] = changes[i][3];
  }
  io.emit('gameMap', gameMap);
}, 1000);

http.listen(port, function() {
  console.log('Server is now connected on port ' + port);
}).on('error', function(err) {
  console.log('err:', err);
});
