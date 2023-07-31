'use strict';
const base64 = require('base-64');
const Users = require('../models/users.model');

function basic(req, res, next) {
    if (req.headers.authorization) {
        // Basic c2hpaGFiOjEyMw
        let headersParts = req.headers.authorization.split(" ");// ['Basic','c2hpaGFiOjEyMw==']
        // let encodedValue = headersParts[1];
        let encodedValue = headersParts.pop();
        let decodedValue = base64.decode(encodedValue);//username:password
        let [username, password] = decodedValue.split(":");
        Users.authBasic(username, password)
            .then((data) => { //cus authBasic is a promise func
                console.log(data);
                req.user = data;// here req is an object so i need to add a new property to it called user and give the value "data" which contain the username, password and token
                next();
            }).catch((error) => {
                next('invalid Login');
            })
    }
}


module.exports = basic;