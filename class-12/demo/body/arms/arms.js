'use strict';

// see the notes in your notebook  
// in the terminal always run the client( ex: node arms.js) you want to see the result and the server, see the screenshot 

require('dotenv').config();
const port = process.env.PORT || 3030;
const io = require('socket.io-client');
let host = `http://localhost:${port}/`;
const brainConnection = io.connect(host);


brainConnection.on('brightness', handleBrightness);

function handleBrightness(payload) {
    if (payload.brightness >= 95) {
        console.log('move your arms');
    }
}
// brainConnection.on('light',()=>{ // here im trying to listen on light event (which is from another client[eyes]) from this client(arms), it wont work cus i made a connection between the clients and the server not between clients
//     console.log(`light is here arms`)
// })



