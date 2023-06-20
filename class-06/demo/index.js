'use strict';
require('dotenv').config();
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL;
const sequelize = new Sequelize(POSTGRES_URI, {});
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


app.get('/', (req, res) => {
    res.status(200).send("hello ");
})
app.post('/signup', async (req, res) => {
    let username = req.body.username;
    let hashedPassword = await bcrypt.hash(req.body.password, 5);
    // now to insert the data to db:
    const record = await users.create({ //here we used to add one property but since there is more than one now(username and password) i need to put them inside an object to send them to database,
        //this is the normal creation of new person where the newPerson is the data that i fill in the body in thc and People is the table that have the data
        // async function createPerson(req, res) {
        //     let newPerson = req.body;
        //     let person = await People.create(newPerson);
        //     res.status(201).json(person);
        // }
        username: username,
        password: hashedPassword
    });
    res.status(201).json(record);
});

// we send data through the body as we learned and pay attention to the spaces because "anas" is not like "anas " and once we want to check if the username and password are already in the db we go to auth in thc and put the username and password and hit get it will return the data from db

app.get('/signin', async (req, res) => {
    // console.log('headers authorization ', req.headers.authorization); you should put a username and password in the basic to see the result of the console here
    // Basic c2hpaGFiOjEyMw==
    // now i need to get the data of username and password if existed alone without Basic
    if (req.headers.authorization) {
        let headersParts = req.headers.authorization.split(" ");// ['Basic','c2hpaGFiOjEyMw==']
        // let encodedValue = headersParts[1];
        let encodedValue = headersParts.pop();
        let decodedValue = base64.decode(encodedValue);//Kyoko Otonashi:1234
        
        // now i need to split the username:password using distructring the array:
        let [username, password] = decodedValue.split(":");
         // now i need to check if the user exist in the users table         
        const user = await users.findOne({ where: { username: username } }) // here the user is an obj containing username and password properties
        // console.log('user from DB ', user);
        const validUser = await bcrypt.compare(password, user.password); //return true or false in the console
        if (validUser) {
            res.status(200).json({ user }); // to see the result of this i need to go the basic in auth in thc and put the correct username and passowrd that i added to the db, once i click on get it will send the data saved in db if i put wrong username or password it will send the console in the terminal says "wrong username or password"
        } else {
            res.status(500).send("wrong username or password");
        }

    } else {
        console.log('no user name or password')
    }
    /// if you try to add a new user to db with the same data for another user it will givie an error because it consider the data as unique
});

sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log("i'm running ");
        })
    })