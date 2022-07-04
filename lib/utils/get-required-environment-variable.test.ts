import { getRequiredEnvironmentVariable } from './get-required-environment-variable';

describe('getRequiredEnvironmentVariable', () => {
  it('should return the environment variable is set', () => {
    expect.assertions(1);

    const originalProcessEnv = process.env;
    process.env = { ...originalProcessEnv };
    process.env['TEST_VARIABLE'] = 'test_value';

    expect(getRequiredEnvironmentVariable('TEST_VARIABLE')).toBe('test_value');
    process.env = originalProcessEnv;
  });

  it('should throw an error if the environment variable is not set', () => {
    expect.assertions(1);

    expect(() => getRequiredEnvironmentVariable('TEST_VARIABLE')).toThrow(
      'Environment variable "TEST_VARIABLE" should be set.',
    );
  });
});
