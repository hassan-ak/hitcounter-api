# HitCounter Api

BootCamp 2021 Project 03

---

## Steps to compile code

### Step 01 (Create a basic cdk app)

Create and navigate to new directory using “mkdir hitcounter-api && cd hitcounter-api”. Create a new cdk project using “cdk init app --language typescript”. As typescript is used for coding so transcribing the code to javascript is necessary, one way is to build the app in the end other is to use “npm run watch” to auto compile the code whenever any file is changed so use the latter option. To synthesize the app use “cdk synth” this will output the cloud formation template. Bootstrap the app using “cdk bootstrap” bootstrapping is necessary only in case when app is deployed for the first time. Deploy the app using “cdk deploy”.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
