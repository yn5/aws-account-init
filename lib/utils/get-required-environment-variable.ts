export function getRequiredEnvironmentVariable(name: string) {
  const environmentVariable = process.env[name];

  if (!environmentVariable) {
    throw new Error(`Environment variable "${name}" should be set.`);
  }

  return environmentVariable;
}
