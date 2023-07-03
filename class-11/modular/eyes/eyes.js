'use strict';

const events = require('../eventspool');


events.on('light', eyesLid);
function eyesLid(payload) {
    if (payload.brightness >= 75) { // here we put payload.brightness together because the payload here is object({ brightness: 75 }) (got it from brain), payload can be string also
        console.log('closing eyes.......');
    }
}
// the scenario will be like this : first it comes to event (light) here then go to event light-detected in brain js finally will come back to setInterval, here it went to the event light-detected before setInterval cause the setInterval will wait 3 seconds to be carryed out

setInterval(() => {
    let brightness = Math.ceil(Math.random() * 100);
    console.log('-----------------------------------------------');
    console.log('Brightness Detected: ', brightness);
    events.emit('light-detected', brightness);
}, 3000)
