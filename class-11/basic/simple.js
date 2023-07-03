'use strict';

const Events = require('events');

const eventsPool = new Events();

// eventsPool.on
// eventsPool.emit
// eventsPool.once

eventsPool.on('hi', hiEventHandler); /// with this i regist a new event called hi
eventsPool.on('hi', hiEventHandler2);



function hiEventHandler(payload) {
    console.log(`hi from ${payload}`);
    // console.log(`Hi my name is ${payload.name} i'm ${payload.age} years old and my grade is ${payload.grade}%`);
}

function hiEventHandler2(payload) {
    console.log('mohahanad')
}

eventsPool.emit('hi', 'shihab');
// eventsPool.emit('hi', 'abuessa');
// eventsPool.emit('hi', {
//     name: "laila",
//     age: 22,
//     grade: 89
// });

let counter = 0;
eventsPool.once('increment', counterHandler); //using once means i will emit the event once,here it will print 1 only
function counterHandler() {
    counter++;
    console.log('counter', counter);
}

eventsPool.emit('increment'); //counter 1
eventsPool.emit('increment');
eventsPool.emit('increment');
eventsPool.emit('increment');

eventsPool.on('delete', (data) => {
    sendEmail({
        to: "admin@yourdomain.com",
        subject: "something deleted",
        body: `Record id ${data} was removed`,
    });
})

let SQL = `delete from table_name where id = $1;`;
let values = [req.query.id];
client.query(SQL, values).then((result) => {
    eventsPool.emit('delete', req.query.id);
    res.send('record deleted');
})