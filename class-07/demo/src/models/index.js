'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {}); // the empty objest here is sequelizeOptions and it depends on the stage im working on(test, dev, production), it will be an empty object if im testing, or developing localy


module.exports = { sequelize, DataTypes };