'use strict';
const express = require("express");
const app = express();
const peopleRouter = require('./routes/people.route');
app.use(express.json());
app.use(peopleRouter); //it is added as a middleware, it will add all the routes in the peoploe.route.js

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('hi');
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}