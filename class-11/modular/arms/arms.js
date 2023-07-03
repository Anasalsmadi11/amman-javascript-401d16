'use strict';

const events = require('../eventspool');

events.on('light', armsMoving);  /// with this i regist a new event called light
function armsMoving(payload) {
    if (payload.brightness >= 90) {
        console.log('moving arms .....');
    }
}

