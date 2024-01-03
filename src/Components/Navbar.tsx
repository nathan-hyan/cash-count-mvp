import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import PriceDisplay from './PriceDisplay';

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
          <Typography variant='h1' sx={{ fontSize: '1.6rem', flexGrow: 1 }}>
            Cash Count
          </Typography>

          <PriceDisplay label='Dolar Blue' amount={999} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
