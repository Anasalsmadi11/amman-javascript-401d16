'use strict';

const io = require('socket.io')(3000);
const uuid = require('uuid').v4;
const family = io.of('/family'); // creating a name space using properety (of), it is a property in io object

 // i need to store the tasks that parents send, so i store them here to use them
const msgQueue = {
    tasks: {

    }
}
// msgQueue = {
//     tasks: {
//         "424dfefefvij": "clean your room", // "424dfefefvij" is a key value not property, the difference is property doesnt gave qoutes
//         "415ghyfeavbt": "eat your food"
//     }
// }

family.on('connection', (socket) => {

    console.log('connected', socket.id);

   // socket here refers to parent client cuz the new_task event is triggered from the parent
    socket.on('new_task', (payload) => { // if the parent have many tasks i need to add them dinamically, to the msgQeueu obj every time the 'new_task' event is triggered
        console.log('i got your message')
        const id = uuid(); // console.log(typeof(id)) // string
         
         // now to assign every new task to new unique id:
        msgQueue.tasks[id] = payload; // i cant use the dot notation here cus the generated id is string not int 
        socket.emit('added', payload); // i used socket not family cus family will send this message to all the clients that connected to to this namespace
        
           // now to send the msgQueue to all the children if the child is awake(connected) it will get this message if not i need to do somthing
           family.emit('task', {
            id: id,
            payload: msgQueue.tasks[id]
        })
    });
     
     /// wht if one of the child wasnt connected when the parent send the message to all children? , i need to do this:
    socket.on('get_all', () => {
        // Object.keys(msgQueue.tasks) >>> ['424dfefefvij','415ghyfeavbt']
        console.log('msgQueue v1', msgQueue)
        Object.keys(msgQueue.tasks).forEach((id) => {
            socket.emit('task', {
                id: id,  // i put the id cuz once the child recieve an order from the parent it will till it i got your order delete it(from msgQueue),i delete it cuz there is no need for it once it is recieved to child
                payload: msgQueue.tasks[id]
            })
        })
    });

      // once the child recieve the message i need to delete the task from msgQueue
    socket.on('received', (task) => {
        //delete the task from the msgQueue
        delete msgQueue.tasks[task.id];
        console.log('msgQueue v2', msgQueue)
    })

});
// Scenario: first split the terminal screen to three parts then and always start the server(node msgQueue.js), now if you start the parent first that means the child still disconnected when the parent issue the tasks, so once the child is connected it will trigger the event get all then from the server it will go straight to line that have  socket.on('get_all', etc.. and get the tasks as follows, if you started the child first that means once the parent is connected it will issue the tasks (emit new_task) and from the server , the server will send through family.emit('task' etc...  the tasks to all children that are currently connected and here the get_all has already been emited and found no tasks and that cuz  the parent wasnt connected