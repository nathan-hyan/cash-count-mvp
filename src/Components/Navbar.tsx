import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ mt: 1.5 }}>
      <AppBar
        position='static'
        sx={{
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            height: '3.5rem',
            color: '#000',
            backgroundColor: '#D9D9D9',
          }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, ml: '5rem', fontSize: '1.875rem' }}
          >
            Cash Count
          </Typography>
          <Box sx={{ display: 'flex', width: '13.3rem', fontSize: '1.25rem' }}>
            <Box sx={{ padding: '1.25rem 1rem' }}>
              <Typography>Dolar Blue</Typography>
            </Box>
            <Box sx={{ padding: '1.25rem 1rem' }}>
              <Typography>$975</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
