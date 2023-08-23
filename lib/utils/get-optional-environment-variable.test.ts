import { getOptionalEnvironmentVariable } from './get-optional-environment-variable';

describe('getRequiredEnvironmentVariable', () => {
  it('should return the environment variable is set', () => {
    expect.assertions(1);

    const originalProcessEnv = process.env;
    process.env = { ...originalProcessEnv };
    process.env['TEST_VARIABLE'] = 'test_value';

    expect(getOptionalEnvironmentVariable('TEST_VARIABLE')).toBe('test_value');
    process.env = originalProcessEnv;
  });

  it('should throw an error if the environment variable is not set', () => {
    expect.assertions(1);

    expect(getOptionalEnvironmentVariable('TEST_VARIABLE')).toBeNull();
  });
});
