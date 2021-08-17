# HitCounter Api

## Steps to compile code

### Step 01 (create basic cdk App)

Create and navigate to new directory

```
mkdir hitcounter-api
cd hitcounter-api
```

Create a basic CDK app

```
cdk init app --language typescript
```

Compile code

```
npm run watch
```

Synthesize the app

```
cdk synth
```

Deploy App

```
cdk deploy
```

### Step 02 (Create Hello Cdk)

Install dependancies

```
npm install @aws-cdk/aws-lambda
```

add lambda hander code in "lambda/hello.ts"

```
exports.handler = async function (event: { path: any }) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, CDK! You've hit ${event.path}\n`,
  };
};
```

add lambda function to the stack

```
const hello = new lambda.Function(this, "HelloHandler", {
  runtime: lambda.Runtime.NODEJS_14_X,
  code: lambda.Code.fromAsset("lambda"),
  handler: "hello.handler",
});
```

## Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
