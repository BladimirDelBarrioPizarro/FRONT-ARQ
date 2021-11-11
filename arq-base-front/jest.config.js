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
    '/src/types.d.ts',
    '/src/stories/',
    '.+.story..+',
    '.+.example..+'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}'
  ],
  coverageDirectory: 'reports/coverage'
}
