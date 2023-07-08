'use strict';

// see the notes in your notebook 
// to run the code first you should split the terminal to two or more ,one of them should be the server (hub.js) and the rest are the clients , in one side run [node hub.js] first then run [node client.js]

require('dotenv').config();
const port = process.env.PORT || 3030;
const ioClient = require('socket.io-client');
let host = `http://localhost:${port}/`;
const socket = ioClient.connect(host); // This line creates a socket.io client connection to the specified host. It establishes a connection to the socket.io server running at the provided URL.

socket.on('sayHi', (payload) => { // in the client side you listen to an event called 'sayHi' (it may be a button or whatever), and you expect from the server to respond to this once it is triggered so i will put the emit in the server
    setTimeout(() => {
        console.log('server said hi');
    }, 2000)
})

setTimeout(() => {
    socket.emit('hiFromClient');
}, 9000)



setTimeout(() => {
    socket.emit('bye');
}, 15000)
