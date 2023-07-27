'use strict';
const dynamoose = require('dynamoose');
const contactsModel = require('./contacts.schema');

/// in the package.json add a "start" to scripts and give it a value "node index.js"

exports.handler = async (event) => {
    try {
        const data = await contactsModel.scan().exec(); // with this i read the data from contactsModel table
        return {
            statusCode: 200,
            body: JSON.stringify(data), // here i put the body property cuz i always send the data through the body, with this i convert the object to json 
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'true',
                message: error.message,
            })
        }
    }
}
