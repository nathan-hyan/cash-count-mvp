import { Container, Paper, Typography } from '@mui/material';

type TotalOutputType = {
  currencySymbol: string;
  title: string;
  outputValue: number;
};

export default function TotalOutput({
  currencySymbol,
  title,
  outputValue,
}: TotalOutputType) {
  const formattedCurrency: string = outputValue.toLocaleString('en-AR', {
    style: 'currency',
    currency: currencySymbol,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <Container sx={{ display: 'flex', mb: '2rem' }}>
      <Paper
        variant='outlined'
        sx={{
          mx: '1.5rem',
          width: '12.8rem',
          padding: '1rem 2rem',
        }}
      >
        <Typography>{title}</Typography>
      </Paper>
      <Paper
        variant='outlined'
        sx={{
          width: '12.8rem',
          padding: '1rem 2rem',
        }}
      >
        <Typography>{formattedCurrency}</Typography>
      </Paper>
    </Container>
  );
}
