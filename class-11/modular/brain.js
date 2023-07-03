'use strict';

const events = require('./eventspool');
require('./eyes/eyes.js');// using require only is as you copied the eyes.js code and pasted it here
require('./arms/arms.js');


// events.emit('light', { brightness: 35 });
// events.emit('light', { brightness: 80 });
// events.emit('light', { brightness: 95 });


// here 'light-detected' event worked even i imited it before registering it because of the setinterval method in eyes.js (usually the imiting wont work unless you register it first )
events.on('light-detected', (payload) => { /// in terminal using nodemon wont work, use node and this file's name
    events.emit('light', { brightness: payload })
})