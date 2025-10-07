/** @type {import('jest').Config} */
const config = {
  preset: "react-native",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@mobile/(.*)$": "<rootDir>/src/$1",
    "^@ui/(.*)$": "<rootDir>/../../packages/ui/src/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|react-navigation" +
      "|@react-navigation" +
      "|@react-native-community" +
      "|react-native-reanimated" +
      "|react-native-gesture-handler" +
      "|react-native-safe-area-context" +
      "|react-native-screens" +
      ")/)",
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
};

module.exports = config;
