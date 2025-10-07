// Shared constants
export const APP_NAME = "Tatum";
export const APP_VERSION = "1.0.0";

// API endpoints
export const API_ENDPOINTS = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  AUTH: "/auth",
  USERS: "/users",
} as const;
