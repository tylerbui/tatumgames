// Export all shared types here
// Example:
// export type { User } from './user';
// export type { ApiResponse } from './api';

// Common types that can be used across apps
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}
