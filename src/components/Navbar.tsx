import { useQuery } from 'react-query';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import PriceDisplay from './PriceDisplay';

export default function Navbar() {
  const DOLAR_REFETCH_INTERVAL = 300000;
  const fetchDolarValue = async () => {
    const response = await fetch('https://mercados.ambito.com/home/general3');
    return response.json();
  };

  const { data, status } = useQuery({
    queryKey: ['dolarValue'],
    queryFn: fetchDolarValue,
    refetchInterval: DOLAR_REFETCH_INTERVAL,
  });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: Failed to fetch Dolar value.</div>;
  }

  const DOLAR_INFORMAL = data[1].venta;

  return (
    <Box sx={{ mt: 1.5 }}>
      <AppBar position='static' elevation={0}>
        <Toolbar
          sx={{
            height: '3.5rem',
            color: grey[900],
            bgcolor: grey[300],
          }}
        >
          <Typography variant='h1' sx={{ fontSize: '1.6rem', flexGrow: 1 }}>
            Cash Count
          </Typography>
          <PriceDisplay label='Dolar Blue' amount={DOLAR_INFORMAL} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
