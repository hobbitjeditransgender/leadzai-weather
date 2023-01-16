export const collectCoverage = true;
export const collectCoverageFrom = ['src/**/*.{ts,tsx}'];
export const coverageDirectory = 'coverage';
export const testEnvironment = 'jest-environment-jsdom';
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];
export const preset = 'ts-jest/presets/js-with-babel';
