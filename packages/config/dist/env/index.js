// Environment configuration
export const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    IS_DEVELOPMENT: process.env.NODE_ENV === "development",
    IS_PRODUCTION: process.env.NODE_ENV === "production",
    IS_TEST: process.env.NODE_ENV === "test",
};
//# sourceMappingURL=index.js.map