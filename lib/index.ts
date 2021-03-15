import { Construct, Duration } from "@aws-cdk/core";
import { IHostedZone, CnameRecord, ARecord, RecordTarget } from "@aws-cdk/aws-route53";


export interface WebflowProps {
  // The hosted zone to set up for Webflow
  readonly hostedZone: IHostedZone;
}


export class Webflow extends Construct {
  constructor(scope: Construct, id: string, props: WebflowProps) {
    super(scope, id);

    // https://university.webflow.com/lesson/connect-a-custom-domain
    // https://university.webflow.com/glossary/dns-records

    new CnameRecord(scope, "WWW", {
      zone: props.hostedZone,
      domainName: "proxy-ssl.webflow.com",
      recordName: "www",
      ttl: Duration.hours(24),
    });

    const targets = [
      "75.2.70.75",
      "99.83.190.102",
    ];

    new ARecord(scope, "Alias", {
      zone: props.hostedZone,
      target: RecordTarget.fromIpAddresses(...targets),
      recordName: undefined,  // root zone
      ttl: Duration.hours(24),
    });
  }
}
