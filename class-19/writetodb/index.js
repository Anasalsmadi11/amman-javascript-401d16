'use strict';
const dynamoose = require('dynamoose'); // this is  library to interact with a DynamoDB table. It is designed to handle HTTP requests and create new contacts in the DynamoDB table based on the provided query string parameters. 

// table:
const contactsSchema = new dynamoose.Schema({
    'id': String,
    'name': String,
    'phone': String,
});

const contctsModel = dynamoose.model('contacts', contactsSchema); // this is a model to create many contacts with the same coloumns(id, name, phone), it is just like the customer model we created before but this is connecte to the DynamoDb in AWS

// lambda function
exports.handler = async (event) => {
    // from swagger inspector when i insert a new contact i need to get it and assign it to a new contact

    //getting the contact:
    let { id, name, phone } = event.queryStringParameters; // this is called destructuring, see the example below
    let newContact = { id, name, phone };
    let myResponse = {
        statusCode: null,
        body: null // the initial value is null(cuz it is empty)
    }
    try {
        let newFriend = await contctsModel.create(newContact);
        myResponse.statusCode = 200;
        myResponse.body = JSON.stringify(newFriend)
    }
    catch (error) {
        myResponse.statusCode = 500;
        myResponse.body = JSON.stringify(error.message);
    }

    return myResponse;

}

// Destructuring assignment allows you to extract values from objects or arrays and assign them to variables in a concise and readable way.

// // Example 1: Destructuring from an object
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//   };
  
//   const { firstName, age } = person;
  
//   console.log(firstName); // Output: John
//   console.log(age); // Output: 30
  
//   // Example 2: Destructuring from an array
//   const numbers = [1, 2, 3, 4, 5];
  
//   const [first, second, ...rest] = numbers;
  
//   console.log(first); // Output: 1
//   console.log(second); // Output: 2
//   console.log(rest); // Output: [3, 4, 5]
  