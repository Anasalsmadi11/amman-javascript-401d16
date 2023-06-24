'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_DATA;
const { sequelize, DataTypes } = require('./index');

// any change you make in the table you should drop the table 
const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        // get(){
        //     const dataValue= this.getDataValue("username") //dataValue is built in, also the username wont be stored in db in uppercase
        //     return dataValue.toUpperCase()
        // } 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'writer', 'editor', 'user'),
        defaultValue: 'user'
    },
    capabilities: {
        type: DataTypes.VIRTUAL,
        get() {
            const acl = {
                user: ['read'],
                writer: ['read', 'create'],
                editor: ['read', 'create', 'update'],
                admin: ['read', 'create', 'update', 'delete']
            }
            return acl[this.role]; // here bracket notation is important we cant use dot
        }
    },
    token: {
        type: DataTypes.VIRTUAL,
        // get(){ // this wont store the token in the db, its function is to (get) back the token once i signup
        //     return jwt.sign({ username: this.username, password: this.password }, SECRET);
        // }
    }
});

users.authBasic = async function (username, password) {
    const user = await users.findOne({ where: { username: username } });
    //select * from users where username = 'shihab'
    // console.log('user from DB ', user);
    const validUser = await bcrypt.compare(password, user.password);
    if (validUser) {
        let newToken = jwt.sign({ username: user.username, password: user.password }, SECRET);
        user.token = newToken;
        return user; // this to return the user in thc once you hit the signin route
    } else {
        throw new Error("invalid user");
    }
}

users.authBearer = async function (token) {
    const parsedToken = jwt.verify(token, SECRET);
    console.log('**************', parsedToken)
    const user = await users.findOne({ where: { username: parsedToken.username } })
    if (user.username) {
        return user
    } else {
        throw new Error('invalid token');
    }
}


module.exports = users;