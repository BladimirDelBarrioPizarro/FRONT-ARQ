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
        branches: 0, //90
        functions: 0, //90
        lines: 0, //90
        statements: 0, //90
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}'
  ],
  coverageDirectory: 'reports/coverage'
}
