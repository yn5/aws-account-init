export function getOptionalEnvironmentVariable(name: string) {
  const environmentVariable = process.env[name];

  if (!environmentVariable) {
    return null;
  }

  return environmentVariable;
}
