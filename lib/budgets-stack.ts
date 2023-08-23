import { Construct } from 'constructs';
import { Stack, StackProps, aws_budgets as budgets } from 'aws-cdk-lib';
import { getRequiredEnvironmentVariable } from './utils/get-required-environment-variable';

export class BudgetsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const emailsToBeNotified = getRequiredEnvironmentVariable(
      'BUDGET_NOTIFICATION_EMAILS',
    ).split(',');
    const notifications = [
      { notificationType: 'ACTUAL', threshold: 100 },
      { notificationType: 'FORECASTED', threshold: 200 },
      { notificationType: 'FORECASTED', threshold: 400 },
      { notificationType: 'FORECASTED', threshold: 800 },
      { notificationType: 'FORECASTED', threshold: 1600 },
      { notificationType: 'FORECASTED', threshold: 3200 },
      { notificationType: 'FORECASTED', threshold: 6400 },
    ];

    const subscribers = emailsToBeNotified.map((emailToBeNotified) => ({
      address: emailToBeNotified,
      subscriptionType: 'EMAIL',
    }));

    const notificationsWithSubscribers = notifications.map(
      ({ notificationType, threshold }) => ({
        notification: {
          comparisonOperator: 'GREATER_THAN',
          notificationType,
          threshold,
          thresholdType: 'PERCENTAGE',
        },
        subscribers,
      }),
    );

    new budgets.CfnBudget(this, 'MainBudget', {
      budget: {
        budgetLimit: {
          amount: 10,
          unit: 'USD',
        },
        budgetType: 'COST',
        timeUnit: 'MONTHLY',
      },
      notificationsWithSubscribers,
    });
  }
}
