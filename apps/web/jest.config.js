const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^@web/(.*)$": "<rootDir>/$1",
    "^@ui/(.*)$": "<rootDir>/../../packages/ui/src/$1",
  },
};

module.exports = createJestConfig(config);
