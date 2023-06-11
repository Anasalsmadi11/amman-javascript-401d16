'use strict';

//packages needed:
// npm sequelize pg sqlite3 dotenv jest

require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize"); 
const people = require('./people.model');
const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL; //this is for if i run the test(npm test) it wil use the sqlite3 if run dev or start it will use postgres see the package.json

// sequelizeOptions depends on the stage im working on(test, dev, production), i put it in condition where it will be an empty object if im testing, or developing localy
let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {} //the empty object

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// let sequelize = new Sequelize(POSTGRES_URI, {});//if we don't have production or testing we can send {}

// we import them to use them outside the modal folder
module.exports = {
    db: sequelize,
    People: people(sequelize, DataTypes)
}