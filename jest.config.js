const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });

const config = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@app/web/(.*)$": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(config);
