import { Box, Typography } from '@mui/material';

interface Props {
  label: string;
  amount: number;
}

function PriceDisplay({ label, amount }: Props) {
  return (
    <Box sx={{ padding: '1.25rem 1rem' }}>
      <Typography variant='h6'>
        {label}: ${amount}
      </Typography>
    </Box>
  );
}

export default PriceDisplay;
