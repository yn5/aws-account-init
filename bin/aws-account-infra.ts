#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BudgetsStack } from '../lib/budgets-stack';
import { DomainsStack } from '../lib/domains-stack';

const app = new cdk.App();
new BudgetsStack(app, 'BudgetsStack');
new DomainsStack(app, 'DomainsStack');
