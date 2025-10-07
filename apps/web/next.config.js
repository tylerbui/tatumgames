/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set the correct workspace root to avoid lockfile warnings
    outputFileTracingRoot: require('path').join(__dirname, '../../'),

    // Transpile packages from the monorepo
    transpilePackages: ['@tatum/ui', '@tatum/types'],

    // Other Next.js configuration options
    reactStrictMode: true,
};

module.exports = nextConfig;
