import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
            variant='h6'
            component='h1'
            sx={{ flexGrow: 1, ml: '5rem', fontSize: '1.875rem' }}
          >
            Cash Count
          </Typography>
          <Box sx={{ display: 'flex', width: '13.3rem', fontSize: '1.25rem' }}>
            <Box sx={{ padding: '1.25rem 1rem' }}>
              <Typography variant='subtitle1' component='h2'>
                Dolar Blue
              </Typography>
            </Box>
            <Box sx={{ padding: '1.25rem 1rem' }}>
              <Typography variant='subtitle1' component='h3'>
                $975
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
