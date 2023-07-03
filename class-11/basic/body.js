'use strict';

const Events = require('events'); // it is built in package(no need to npm it)
const eventsPool = new Events();

eventsPool.on('light', eyesLid); //with this im registering a new event called light
eventsPool.on('light', armsMoving); //same event with diggerent handler

function eyesLid() {
    console.log('eyesLid closing..... ');
}

function armsMoving(payload) {
    console.log(`the brightness is ${payload.brightness} arms moving to hide the eyes`);
} // here we put payload.brightness together because the payload here is object({ brightness: 75 }), payload can be string also



eventsPool.emit('light', { brightness: 75 });