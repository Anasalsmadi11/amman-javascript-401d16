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

// 1- eventsPool.on('hi', hiEventHandler);: This line sets up an event listener for the 'hi' event on the eventsPool object. It specifies that whenever the 'hi' event is triggered, the hiEventHandler function should be called.

// 2- function hiEventHandler(payload) { ... }: This is the definition of the hiEventHandler function, which takes a payload as a parameter. In this case, the payload is expected to be a string.

// 3- eventsPool.emit('hi', 'shihab');: This line emits (triggers) the 'hi' event on the eventsPool object. It includes the payload 'shihab', which will be passed as an argument to the event handler function.

// 4-  //When the 'hi' event is emitted, the hiEventHandler function is executed. It logs a message to the console, using the payload value to indicate where the message is coming from. In this case, it will log "hi from shihab" to the console.

 //To summarize, the code sets up an event listener for the 'hi' event and defines a function to handle that event. When the 'hi' event is emitted with the payload 'shihab', the event handler function is called, and it logs a message to the console.








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