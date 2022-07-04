# AWS account infra

Initial infra structure for a fresh AWS account.

## Prerequisites

- The AWS account you want to deploy this service on is bootstrapped: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html
- Docker should be installed on the development machine https://docs.docker.com/get-docker/.
- The `aws` CLI should be installed on the development machine (https://formulae.brew.sh/formula/awscli).
- A profile should be configured for AWS on the development machine
  ```bash
  aws configure --profile <an-aws-profile-name>
  ```

## Getting started

1. Install dependencies
   ```bash
   npm i
   ```
2. Deploy the stack
   ```bash
   DOMAIN=<your-domain> BUDGET_NOTIFICATION_EMAILS=<comma-separated-list-of-emails> npm run deploy --profile <the-aws-profile-name>
   ```
3. While the stack is deploying for the first time you will have to point the DNS of your domain to the Name Servers of the Hosted Zone that is being created by this stack. This so the certificate created by ACM can be verified while deploying.

# TODO

- TODOs listed [here](TODO.md)
