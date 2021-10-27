var socket = io(process.env.WEB_SOCKET_URL || 'localhost:8080');
socket.on('news', function (data) {
  console.log(data);
  // socket.emit('my other event', { my: 'data' });
});

// socket.on('testingresponse')

// creates a unique socket.io room
// function hostCreateNewGame() {
//   var newGameId = 1;
//   socket.emit('newGameCreated', {gameId: newGameId, socketId: socket.id});
//   socket.join(newGameId.toString());
// }