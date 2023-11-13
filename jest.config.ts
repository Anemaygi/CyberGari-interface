
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  },
  rootDir: './src',
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/$1',
    },
    testPathIgnorePatterns: [
      "/node_modules/",
      "components/ui/",
    ],
  
}