import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class HitcounterApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });
  }
}
