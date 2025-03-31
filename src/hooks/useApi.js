import { useState, useCallback } from 'react';

export function useApi(apiFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await apiFunction(...args);
      
      setData(result);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error desconocido');
      return { success: false, error: err.response?.data?.message || err.message || 'Error desconocido' };
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { data, loading, error, success, execute };
}

export default useApi;