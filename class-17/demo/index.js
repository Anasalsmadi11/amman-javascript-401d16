'use strict';
// const AWS = require('aws-sdk');
// const s3 = new AWS.S3();

export const handler = async (event) => { // this is how you define a lambda function
    const MyResponse = JSON.stringify(event); // event is an object i want to convert it to JSON type once the function is invoked
    console.log('reading option is working ', MyResponse)
    //   // TODO implement
    //   const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    //   };
    return {
        statusCode: 200,
        body: `All is working \n ${MyResponse}`
    };
};

// example of converting an object to JSON string :

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);

//   // output
//   {"name":"John","age":30,"city":"New York"}