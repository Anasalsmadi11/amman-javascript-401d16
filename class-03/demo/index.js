'use strict';
require("dotenv").config();

let port = process.env.PORT || 3030;
const app = require('./src/server');
const { db } = require('./src/models/index'); // we put db inside {} because i exported it from the index.js in the modal folder as an object key 

// we need to connect the database(db),if the db is connected to our database(demo3) then start the server
db.sync()
    .then(() => {
        app.start(port);
    })