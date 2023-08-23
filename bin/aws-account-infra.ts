#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BudgetsStack } from '../lib/budgets-stack';
import { DomainsStack } from '../lib/domains-stack';
import { getOptionalEnvironmentVariable } from '../lib/utils/get-optional-environment-variable';

const app = new cdk.App();

if (getOptionalEnvironmentVariable('DOMAIN')) {
  new DomainsStack(app, 'DomainsStack');
}
if (getOptionalEnvironmentVariable('BUDGET_NOTIFICATION_EMAILS')) {
  new BudgetsStack(app, 'BudgetsStack');
}
