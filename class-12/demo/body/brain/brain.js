'use strict';
require('dotenv').config();
const port = process.env.PORT || 3030;

// const socket = require('socket.io');
// const ioServer = socket(port);
// or  
const ioServer = require('socket.io')(port);

ioServer.on('connection', (socket) => {
    console.log('connected ', socket.id);
    // ioServer.emit('brightness', { brightness: 75 }); // with this im sending a message to all other cllients

    socket.on('light', () => { // see the scenario down
        setInterval(() => {
            let brightness = Math.ceil(Math.random() * 100);
            console.log('-------------------------------');
            console.log('Brightness Detected: ', brightness);
            ioServer.emit('brightness', { brightness: brightness });
        }, 3000)
    });
})


const healthSystem = ioServer.of('/health-system'); // this is the name space, i use it to talk with a specific client

healthSystem.on('connection', (socket) => { // im making a specific connection with the client so that i can talk to him alone(without other clients)
    console.log('connected to health system ', socket.id);
    healthSystem.emit('flu-waring', { temp: -3 })
});



// the scenario here im using fire-event to trigger the event 'light' in the server, in the server the event 'light' once its triggered the callback function works which contain a setInterval and inside it a triggering to another event that registered in both clients arms and eyes