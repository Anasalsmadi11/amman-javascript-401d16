'use strict';

const events = require('./eventspool');
require('./eyes/eyes.js');
require('./arms/arms.js');


// events.emit('light', { brightness: 35 });
// events.emit('light', { brightness: 80 });
// events.emit('light', { brightness: 95 });


events.on('light-detected', (payload) => { /// in terminal using nodemon wont work, use node and this file's name
    events.emit('light', { brightness: payload })
})