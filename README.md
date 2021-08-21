# HitCounter Api

BootCamp 2021 Project 03

---

## Steps to compile code

### Step 01 (Create a basic cdk app)

Create and navigate to new directory using “mkdir hitcounter-api && cd hitcounter-api”. Create a new cdk project using “cdk init app --language typescript”. As typescript is used for coding so transcribing the code to javascript is necessary, one way is to build the app in the end other is to use “npm run watch” to auto compile the code whenever any file is changed so use the latter option. To synthesize the app use “cdk synth” this will output the cloud formation template. Bootstrap the app using “cdk bootstrap” bootstrapping is necessary only in case when app is deployed for the first time. Deploy the app using “cdk deploy”.

### Step 02 (Create HELLO lambda)

To add a lambda function first install aws lambda construct library in the app using “npm install @aws-cdk/aws-lambda”. Update “lib/ hitcounter-api-stack.ts” to add a lambda function to the stack. Add a lambda handler code by creating “lambda/hello.ts”. Before deploying the code to the AWS first check the changes between last deployment and what we have in our app currently by using “cdk diff”. Use “cdk deploy” to deploy the app. After deployment navigate to AWS lambda cosnole and select deployed function, select test from the options and test the lambda function (for testing select options as shown in picture below).

![AWS Lambda function Test configrations](./snaps/testConfig.PNG)

Expand deatils in execution result to view the results of the test. Result of the test are as follows.

![AWS Lambda function Test results](./snaps/testResult.PNG)

### Step 03 (Add API Gateway)

Adding an API Gateway in front of the hello lambda function will expose a public HTTPs endpoint which can be accessed by everyone. This means any request to the URL will be proxied to our lambda function and response will be returned back to user. To do so first install API gateway construct using “npm install @aws-cdk/aws-apigateway” and then update “lib/ hitcounter-api-stack.ts” to define an API endpoint and associate with the lambda function. Find the difference between last deployed app and current changes using “cdk diff” and deploy using “cdk deploy”. Test the app by navigating to the URL available as output when app is deployed. Test it by navigating to multiple paths.

![API gateway endpoint](./snaps/endpoint.PNG)

![API gateway endpoint path 01](./snaps/endpointpath01.PNG)

![API gateway endpoint path 02](./snaps/endpointpath02.PNG)

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
