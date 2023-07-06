'use strict';

// see the notes in your notebook 
// in the package.json we changed the name of main from index.js to hub.js


// require('dotenv').config();
// const port = process.env.PORT || 3030;
// const socket = require('socket.io'); // This module (socket.io) provides the functionality for creating and managing WebSocket connections.
// const ioServer = socket(port); //  This line creates a new socket.io server instance(object) by passing the port variable as the argument. The server will listen for incoming connections on the specified port.


// // the event "connection" is predefined event(means it exist in the socket), When a client establishes a WebSocket connection with the server, this event will be triggered.

// ioServer.on('connection', (newSocket) => { //The newSocket parameter represents the individual connection between the server and that specific client, allowing you to interact with that client.
//     // console.log(newSocket)
//     console.log('welcome to my server socket id: ', newSocket.id)
//     setTimeout(() => {
//         ioServer.emit('sayHi') //the "connection" event is the connectin between the server and the client so if i want them to comunicate between each other i should put all the messages inside the "connection" event
//     }, 3000);
//     newSocket.on('hiFromClient', (payload) => {  // It listens for the event emitted by a specific client and executes the callback function
//         console.log(`the client said hi id:${newSocket.id}`);
//     })

//     newSocket.on('bye', () => {
//         console.log('client said bye');
//         newSocket.disconnect();
//     })
// });

require('dotenv').config();
const port = process.env.PORT || 3030;
const socket = require('socket.io'); 
const ioServer= socket(port)

ioServer.on('connection' , (newSocket)=>{
    // console.log(newSocket.on)
    console.log(`welcome to my server socket id: ${newSocket.id}`)
    setTimeout(() => {
        ioServer.emit('sayHi')
        
    }, 3000);
    newSocket.on('hiFromClient', (payload)=>{
        console.log(`client said hi: ${newSocket.id}`)
    })
    newSocket.on('bye', ()=>{
        console.log(`client said bye`)
        newSocket.disconnect()
    })
})