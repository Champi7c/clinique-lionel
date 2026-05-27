import { useState, useEffect } from 'react';

/**
 * Generic hook to fetch data from the API.
 * @param {Function} fetcher - async function that returns data
 * @param {*} initialData - default value while loading
 */
export function useApi(fetcher, initialData) {
  const [data, setData]       = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetcher()
      .then(d => { if (!cancelled) { setData(d); setLoading(false); } })
      .catch(e => { if (!cancelled) { setError(e); setLoading(false); } });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error };
}
