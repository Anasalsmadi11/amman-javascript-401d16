'use strict';
const dynamoose = require('dynamoose');

// CREATE THE TABLE:
const contactsSchema = new dynamoose.Schema({
    'id': String,       // the names of keys here should be the sabe as the DynamoDB you created in the AWS
    'name': String,
    'phone': String,
});
module.exports = dynamoose.model('contacts', contactsSchema); // 'cotacts' should be the same name as the DynamoDb in aws
 