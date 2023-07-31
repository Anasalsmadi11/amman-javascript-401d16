'use strict';
require('dotenv').config();
const express = require('express');
const basic = require('./middlewares/basicAuth');
const bearer = require('./middlewares/bearerAuth');

const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const users = require('./models/users.model');

app.post('/signup', async (req, res) => { // here post not because im adding somthing to the db but because im sending sensitive info
    // let username = req.body.username;
    // let hashedPassword = await bcrypt.hash(req.body.password, 5);
    const record = await users.create({
        username: req.body.username,
        password: req.body.password
    });
    res.status(201).json(record);
});


app.post('/signin', basic, loginHandler);

app.post('/orders', bearer, ordersHandler); // once i hit orders route i need to insert the token generated from the sign up in the bearer in thc to verify it in users.authBearer, 
// if you have more then one user(more than token) if i put the token of the first user to the second it wont give an error, it will return the data of the first user in the second user object 

function loginHandler(req, res) {
    res.status(200).json(req.user); // i want to print the new property "user" added to object
}

function ordersHandler(req, res) {
    res.json({
        'message': 'you can view the orders',
        'user': req.user
    });
}

module.exports = app;