module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__test__/',
    '/*.test.*/',
    '/*.e2e.*/'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}'
  ],
  coverageDirectory: 'reports/coverage'
}
