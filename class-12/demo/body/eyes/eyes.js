'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
let host = `http://localhost:${port}/`;
const brainConnection = io.connect(host);


brainConnection.on('brightness', handleBrightness);

function handleBrightness(payload) {
    if (payload.brightness >= 75) {
        console.log('close your eyes');
    }
}




// brainConnection.emit('light') // if i want to send a message from eyes(client) to brain(server) i should put the triggering(emit) in the file where i would send the message from