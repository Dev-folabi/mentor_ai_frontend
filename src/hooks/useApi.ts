import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiError } from '@/types/api';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: ApiError) => void;
  initialData?: T;
  immediate?: boolean;
}

interface UseApiReturn<T, P> {
  data: T | undefined;
  loading: boolean;
  error: ApiError | null;
  execute: (params?: P) => Promise<T | undefined>;
  reset: () => void;
}

export function useApi<T, P = void>(
  apiFunction: (params: P) => Promise<T>,
  options: UseApiOptions<T> = {}
): UseApiReturn<T, P> {
  const { onSuccess, onError, initialData, immediate = false } = options;
  
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);
  
  // Use refs to prevent unnecessary re-executions
  const apiFunctionRef = useRef(apiFunction);
  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);
  
  // Update refs when dependencies change
  useEffect(() => {
    apiFunctionRef.current = apiFunction;
    onSuccessRef.current = onSuccess;
    onErrorRef.current = onError;
  }, [apiFunction, onSuccess, onError]);
  
  // Track if the hook has already run once
  const hasRunRef = useRef(false);

  const execute = useCallback(
    async (params?: P): Promise<T | undefined> => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await apiFunctionRef.current(params as P);
        setData(result);
        
        if (onSuccessRef.current) {
          onSuccessRef.current(result);
        }
        
        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const apiError: ApiError = {
          status: err.response?.status || 500,
          message: err.response?.data?.message || err.message || 'Unknown error occurred',
          errors: err.response?.data?.errors,
        };
        
        setError(apiError);
        
        if (onErrorRef.current) {
          onErrorRef.current(apiError);
        }
        
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [] 
  );

  const reset = useCallback(() => {
    setData(initialData);
    setLoading(false);
    setError(null);
  }, [initialData]);

  useEffect(() => {
    if (immediate && !hasRunRef.current) {
      hasRunRef.current = true;
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute, reset };
}

// import { useState, useEffect, useCallback } from 'react';
// import { ApiError } from '@/types/api';

// interface UseApiOptions<T> {
//   onSuccess?: (data: T) => void;
//   onError?: (error: ApiError) => void;
//   initialData?: T;
//   immediate?: boolean;
// }

// interface UseApiReturn<T, P> {
//   data: T | undefined;
//   loading: boolean;
//   error: ApiError | null;
//   execute: (params?: P) => Promise<T | undefined>;
//   reset: () => void;
// }

// export function useApi<T, P = void>(
//   apiFunction: (params: P) => Promise<T>,
//   options: UseApiOptions<T> = {}
// ): UseApiReturn<T, P> {
//   const { onSuccess, onError, initialData, immediate = false } = options;
  
//   const [data, setData] = useState<T | undefined>(initialData);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<ApiError | null>(null);

//   const execute = useCallback(
//     async (params?: P): Promise<T | undefined> => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         const result = await apiFunction(params as P);
//         setData(result);
        
//         if (onSuccess) {
//           onSuccess(result);
//         }
        
//         return result;
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (err: any) {
//         const apiError: ApiError = {
//           status: err.response?.status || 500,
//           message: err.response?.data?.message || err.message || 'Unknown error occurred',
//           errors: err.response?.data?.errors,
//         };
        
//         setError(apiError);
        
//         if (onError) {
//           onError(apiError);
//         }
        
//         return undefined;
//       } finally {
//         setLoading(false);
//       }
//     },
//     [apiFunction, onSuccess, onError]
//   );

//   const reset = useCallback(() => {
//     setData(initialData);
//     setLoading(false);
//     setError(null);
//   }, [initialData]);

//   useEffect(() => {
//     if (immediate) {
//       execute();
//     }
//   }, [execute, immediate]);

//   return { data, loading, error, execute, reset };
// }