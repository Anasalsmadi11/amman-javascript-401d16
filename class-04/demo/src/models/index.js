'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const people = require('./people.model');
const customersSchema = require('./customer.model');
const ordersSchema = require('./order.model');
const Collection = require('./lib/collection');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// let sequelize = new Sequelize(POSTGRES_URI, {});//if we don't have production or testing we can send {}



const customersTable = customersSchema(sequelize, DataTypes);
const ordersTable = ordersSchema(sequelize, DataTypes);



const customerCollection = new Collection(customersTable);
const orderCollection = new Collection(ordersTable);



//here customerTable is called the source model and ordersTable is called the target model.
// The customerTable.hasMany(ordersTable) association means that a One-To-Many relationship exists between customerTable and ordersTable, with the foreign key being defined in the target model (ordersTable).
customersTable.hasMany(ordersTable, {
    foreignKey: 'customerId', // the foreignKey's value should exactly be the same as how it was defined in the table of ordersTable
    sourceKey: 'id',
});
ordersTable.belongsTo(customersTable, {
    foreignKey: 'customerId',
    targetKey: 'id',
});


module.exports = {
    db: sequelize,
    People: people(sequelize, DataTypes),
    CustomerModel: customerCollection,
    OrderModel: orderCollection,
}