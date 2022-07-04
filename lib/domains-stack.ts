import { Construct } from 'constructs';
import {
  Stack,
  StackProps,
  aws_route53 as route53,
  aws_certificatemanager as acm,
} from 'aws-cdk-lib';
import { getRequiredEnvironmentVariable } from './utils/get-required-environment-variable';

const rootDomain = getRequiredEnvironmentVariable('DOMAIN');
const stackName = 'MainDomain';

export class DomainsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hostedZone = new route53.HostedZone(this, stackName, {
      zoneName: rootDomain,
    });

    new acm.Certificate(this, `${stackName}Certificate`, {
      domainName: rootDomain,
      validation: acm.CertificateValidation.fromDns(hostedZone),
      subjectAlternativeNames: [`*.${rootDomain}`],
    });
  }
}
