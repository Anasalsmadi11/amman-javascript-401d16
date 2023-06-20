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
                req.user = data; // i need to attch the data to the user ,the data have the username and the password and the token
                next();
            }).catch((error) => {
                next('invalid Login');
            })
    }
}


module.exports = basic;