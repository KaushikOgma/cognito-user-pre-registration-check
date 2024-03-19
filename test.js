// test.js
require('dotenv').config();
const { handler } = require('./index');

const mockEvent = {
    "version": "1",
    "region": "us-west-2",
    "userPoolId": "us-west-2_example",
    "userName": "janedoe",
    "callerContext": {
      "awsSdkVersion": "aws-sdk-unknown-unknown",
      "clientId": "25ddkmj4v6hfsfvruhpfi7n4hv"
    },
    "triggerSource": "PreSignUp_SignUp",
    "request": {
      "userAttributes": {
        "custom:myCustomAttribute": "myCustomValue",
        "email": "rvp8kxtxx9@privaterelay.appleid.com",
        "email_verified": "false"
      },
      "validationData": null
    },
    "response": {
      "autoConfirmUser": false,
      "autoVerifyEmail": false,
      "autoVerifyPhone": false
    }
  }; // Populate this with a mock event object

handler(mockEvent, mockContext={})
    .then(response => console.log(response))
    .catch(err => console.error(err));
