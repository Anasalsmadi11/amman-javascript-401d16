'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
let host = `http://localhost:${port}/`;
const brainConnection = io.connect(host);


brainConnection.emit('light')

/// fire-event is responsible of emitting the events, notice it is in the brain folder