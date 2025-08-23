// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          jsx: 'react-jsx',
          allowJs: true
        }
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
    '^data/(.*)$': '<rootDir>/src/data/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/']
};

export default config;