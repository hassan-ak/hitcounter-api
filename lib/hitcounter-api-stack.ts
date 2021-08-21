// Here CDK application’s main stack is defined.

// Imports
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

// Main stack for the app
export class HitcounterApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Hello lambda function
    // AWS lambda resource
    const hello = new lambda.Function(this, "HelloLambda", {
      runtime: lambda.Runtime.NODEJS_14_X, // execution environment
      code: lambda.Code.fromAsset("lambda"), // code loaded from "lambda" directory
      handler: "hello.handler", // file is "hello", function is "handler"
    });
  }
}
