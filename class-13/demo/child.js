'use strict';
const client = require('socket.io-client');
const host = `http://localhost:3000/family`;
const socket = client.connect(host);

 // here if the child wasnt connected then connected it will send a message to the server using 'get_all' event to get the messages that it missed while sleeping
socket.emit('get_all');

socket.on('task', (task) => {
    console.log('i got it.'); 
    socket.emit('received', task); // here i send this message to confirm to the server that i recieved the task no more no less
});
