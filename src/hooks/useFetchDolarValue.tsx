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

  let output: string;

  if (status === 'loading') {
    output = 'Loading...';
  }

  if (status === 'error') {
    output = 'Error: Failed to fetch Dolar value.';
  }

  output = data?.[1]?.venta || 'There was an error';
  return output;
};

export default useFetchDolarValue;
