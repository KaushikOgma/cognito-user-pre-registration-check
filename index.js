// Import Required Modules
const AWS = require('aws-sdk');
const sequelize = require('./utilities/database');

const _s3AwsId = process.env.AWS_ID;
const _s3AwsSecret = process.env.AWS_SECRET;
const _s3AwsRegion = process.env.AWS_REGION;
const _awsPatientPoolId = process.env.COGNITO_PATIENT_POOL_ID;

// Configure AWS credentials
AWS.config.update({
  region: _s3AwsRegion,
  accessKeyId: _s3AwsId,
  secretAccessKey: _s3AwsSecret
});
 
// Create a new CognitoIdentityServiceProvider object
const cognito = new AWS.CognitoIdentityServiceProvider({
  region: _s3AwsRegion,
});
 
async function checkIfUserExists(email) {
  try {
    // Define parameters for AdminGetUser operation
    const params = {
      UserPoolId: _awsPatientPoolId,
      Username: email // Use email as the username since email is unique
    };
    console.log("checkIfUserExists:: params:: ",params)
    // Call AdminGetUser operation to retrieve user information
    const userData = await cognito.adminGetUser(params).promise();

    console.log("---------------------------------------------------------")
    console.log("userData:: ",userData)
    console.log("---------------------------------------------------------")

    // If the user is found, return true
    return true;
  } catch (error) {
    // If the user is not found, AWS will throw an error
    // Check if the error code indicates that the user does not exist
    if (error.code === 'UserNotFoundException') {
      return false;
    } else {
      // Handle other errors
      console.error('Error:', error);
      throw error;
    }
  }
}


exports.handler = async (event, context) => {
  try {
      // Extract the email address from the event
      const email = event.request.userAttributes.email;

      // Check if the email already exists in the user pool
      const userExists = await checkIfUserExists(email);
      console.log("userExists: ",userExists)
     
      if (userExists) {
          // User with this email already exists, throw an error
          throw new Error('User with this email already exists');
      }
     
      // Continue with the signup process if the email doesn't exist
      return event;
  } catch (error) {
      // Handle any errors
      console.error('Error occurred:', error);
      throw error;
  }
};
 