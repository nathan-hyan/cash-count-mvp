import { useQuery } from 'react-query';

import { DOLAR_REFETCH_INTERVAL_MS } from '~constants/constants';

type Data = {
  compra: string;
  venta: string;
  fecha: string;
  'class-variacion': 'up' | 'down' | 'up-rp';
}[];

const useFetchDolarValue = () => {
  const fetchDolarValue = async (): Promise<Data> => {
    const API_URL = import.meta.env.VITE_AMBITO_URL;
    const response = await fetch(API_URL);
    return response.json();
  };
  const { data, status } = useQuery<Data, Error>({
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

  const DOLAR_INFORMAL: string = data?.[1]?.venta || '';
  return DOLAR_INFORMAL;
};

export default useFetchDolarValue;
