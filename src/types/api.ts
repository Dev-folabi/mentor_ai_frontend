// Common API response structure
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error response structure
export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

// Pagination metadata
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  perPage: number;
  total: number;
}

// Paginated response
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}