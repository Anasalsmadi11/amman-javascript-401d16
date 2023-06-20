'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_DATA;
const { sequelize, DataTypes } = require('./index');

const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.VIRTUAL, // it will add a virtual column in the users table but you wont be able to see it cus it will delete it once the session is over
    }
});

// this function is created after the middleware basicAuth cus i need to take the username and password from it and verify them here if they are correct or not

users.authBasic = async function (username, password) { //asynd cus this func will deal with the db
    // now i need to verify the username im logging with if existed in db or not:
    const user = await users.findOne({ where: { username: username } }); // the left username is the name of the property im looking for in the users table(object) in db and the right username is the VALUE of it :select * from users where username = 'shihab'

    // console.log('user from DB ', user);
    const validUser = await bcrypt.compare(password, user.password); //here the password is the one im inserting while logging in and the user.password is the registered password that exist in the db
    if (validUser) {
        // now that i verfied the user data are correct(by validUser) i need to generate the token and attach it to the user, every token  consist of 3 parts ,header, payload(where i can send the data),and signiture(where i can send the hashed concatenation of payload and the secret),note that it is not mandetory to send all the data through the pay load 
        // the main purpose of the token is that the website dosent require me to log in every time i hit a route, the existance of the token means im logged in
        let newToken = jwt.sign({ username: user.username, password: user.password }, SECRET); // the sign method is to generate the token
        user.token = newToken;
        return user;
    } else {
        throw new Error("invalid user");
    }
}



// this is to check if the user have the token withen it or not ,if found, there is no need to ask the user to sign in or even sign up  every time he hit the route 
users.authBearer = async function (token) {
    const parsedToken = jwt.verify(token, SECRET);
    console.log('**************', parsedToken)
    const user = await users.findOne({ where: { username: parsedToken.username } }) //here i need to find the user that have the same data(username) in the token(i sent the username data through the token in the authBasic function)
    if (user.username) {
        return user
    } else {
        throw new Error('invalid token');
    }
}


module.exports = users;