module.exports = {
  testEnvironment: 'jest-environment-node-single-context',
  testMatch: ['**/__tests__/**/*.{js,jsx,cjs,mjs,ts,tsx}', '**/?(*.)+(spec|test).{js,jsx,cjs,mjs,ts,tsx}'],
  moduleFileExtensions: ['js', 'cjs', 'scss'],
  reporters: ['default', 'jest-junit'],
};
