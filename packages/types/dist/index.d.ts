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
//# sourceMappingURL=index.d.ts.map