'use strict';


// create a table called People:
const People = (sequelize, DataTypes) =>
    sequelize.define("people", { //define is to create a table in database ,people is the name of the table
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        }
    })



module.exports = People;