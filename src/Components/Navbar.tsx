import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function CurrencyInfo({ label, amount }: { label: string; amount: number }) {
  return (
    <>
      <Box sx={{ padding: '1.25rem 1rem' }}>
        <Typography variant='h6' component='h2'>
          {label}
        </Typography>
      </Box>
      <Box sx={{ padding: '1.25rem 1rem' }}>
        <Typography variant='h6' component='h3'>
          ${amount}
        </Typography>
      </Box>
    </>
  );
}

export default function Navbar() {
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
          <Typography
            variant='h5'
            component='h1'
            sx={{ flexGrow: 1, ml: '5rem' }}
          >
            Cash Count
          </Typography>
          <Box sx={{ display: 'flex', width: '13.3rem' }}>
            <CurrencyInfo label='Dolar Blue' amount={999} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
