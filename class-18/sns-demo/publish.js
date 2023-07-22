'use strict';
require('dotenv').config();
const AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-1",
    apiVersion: "latest",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY should be as they are written here they are in the documentation of aws, you cant change them, https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY, // i dont have the secret key or access key in my student accout
})

function sendMessage() {
    const messageParams = {
        Message: '2this is from vscode Fake discount',
        TopicArn: process.env.TOPIC, // the TOPIC value is the ARN in aws
    }
    const publishMsg = new AWS.SNS().publish(messageParams).promise(); //  here the Promise is used to handle the asynchronous nature of AWS SDK operations.The AWS SDK operations, such as publishing a message to an SNS topic, are asynchronous by nature. 

    //asynchronous In JavaScript, many operations are asynchronous, meaning they do not complete immediately, and their results are not immediately available. Asynchronous operations are common when working with external services, databases
    publishMsg.then((data) => {
        console.log(
            'published: ', data.MessageId
        )
    })
}

sendMessage();