import { useQuery } from 'react-query';

import { DOLAR_REFETCH_INTERVAL_MS } from '~constants/constants';

const useFetchDolarValue = () => {
  const fetchDolarValue = async () => {
    const API_URL = import.meta.env.VITE_AMBITO_URL;
    const response = await fetch(API_URL);
    return response.json();
  };
  const { data, status } = useQuery({
    queryKey: ['dolarValue'],
    queryFn: fetchDolarValue,
    refetchInterval: DOLAR_REFETCH_INTERVAL_MS,
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: Failed to fetch Dolar value.</div>;
  }

  const DOLAR_INFORMAL = data[1].venta;
  return DOLAR_INFORMAL;
};

export default useFetchDolarValue;
