// HitCounter Construct whihc is then attached to the lambda function

// imports
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

// Type defination for props where we are going to attach the lambda function
export interface HitCounterProps {
  // the function for which we want to count url hits
  downstream: lambda.IFunction;
}

// HitCounter construct
export class HitCounter extends cdk.Construct {
  /** allows accessing the counter function */
  public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

    // DynamoDB table
    const table = new dynamodb.Table(this, "Hits", {
      tableName: "Hits",
      partitionKey: { name: "path", type: dynamodb.AttributeType.STRING },
    });

    // HitCounter Lambda Function
    this.handler = new lambda.Function(this, "HitCounterHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "hitcounter.handler",
      code: lambda.Code.fromAsset("lambda"),
      environment: {
        DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
        HITS_TABLE_NAME: table.tableName,
      },
    });

    // grant the lambda role read/write permissions to our table
    table.grantReadWriteData(this.handler);

    // grant the lambda role invoke permissions to the downstream function
    props.downstream.grantInvoke(this.handler);
  }
}
