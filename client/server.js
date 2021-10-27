const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; // 443

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// MIDDLEWARE
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(express.static(path.join(__dirname, '/')));
// app.use(flash());

http.listen(port, function() {
  console.log('Server is now connected on port ' + port);
}).on('error', function(err) {
  console.log('err:', err);
});
