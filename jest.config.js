const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  testTimeout: 35000,
  globals: {
    NODE_ENV: 'test',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'node_modules/',
    'dist/',
  ],
  verbose: false,
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'html', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        autoMapModuleNames: true,
      },
    ],
  },
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};