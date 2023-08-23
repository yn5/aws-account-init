# AWS account infra

Initial infra structure for a fresh AWS account.

## Prerequisites

- The AWS account you want to deploy this service on is bootstrapped: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html
- Docker should be installed on the development machine https://docs.docker.com/get-docker/.
- The `aws` CLI should be installed on the development machine (https://formulae.brew.sh/formula/awscli).
- The machine you're running this on should be able to authenticate with AWS. See https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_auth. ATTOW this means setting up a user using AWS Identity Center and running

```bash
  aws configure sso
```

```bash
aws sso login --profile <aws-profile>
```

## Getting started

1. Install dependencies
   ```bash
   npm i
   ```
2. Deploy the stack

   ```bash
   DOMAIN=<your-domain> BUDGET_NOTIFICATION_EMAILS=<comma-separated-list-of-emails> npm run deploy -- --profile <aws-profile>
   ```

   > The `DOMAIN` and `BUDGET_NOTIFICATION_EMAILS` environment variables are both optional. There presence controls wether the related stack will be deployed or not.

3. If the `DOMAIN` environment is set and thus the `domains-stack` is deploying for the first time, you will have to point the DNS of your domain to the Name Servers of the Hosted Zone that is being created by this stack. This so the certificate created by ACM can be verified while deploying.

# TODO

- TODOs listed [here](TODO.md)
