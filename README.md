# aws-cdk-webflow

AWS CDK constructs to set up a Webflow website for a domain hosted on AWS.

    npm install aws-cdk-webflow

```js
import { App, Stack, StackProps, } from "@aws-cdk/core";
import { HostedZone } from "@aws-cdk/aws-route53";

import { Webflow } from "aws-cdk-webflow";

class MyStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    const hostedZone = HostedZone.fromLookup(this, "HostedZone", {
      domainName: "example.com",
    });

    new Webflow(this, "Webflow", {
      hostedZone: hostedZone,
    });
  }
}
```

Follow [these instructions](https://university.webflow.com/lesson/connect-a-custom-domain) to set up your Webflow project.


## Pre-flight Checklist

Here is a checklist to set up a new account before we can deploy stacks from this project.

- [x] [Bootstrap](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html) the AWS CDK in the AWS Account
- [x] In Route53, buy domains and make sure they have a default [hosted zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html)


## Usage

Self-contained reproducible dev environment

    docker-compose build
    docker-compose run --rm dev bash


## License

Copyright © 2021 robofarm

Distributed under the MIT License (MIT).
