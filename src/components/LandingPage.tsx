import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

import TotalContainer from '~components/TotalContainer';
import { BILL_VALUES } from '~constants/constants';

import Form from './Form';

export default function LandingPage() {
  const [totalResultPesos, setTotalResultPesos] = useState<number>(0);

  const BillFormArray = BILL_VALUES.map((billValue) => (
    <Form
      key={billValue}
      billValue={billValue}
      setTotalResultPesos={setTotalResultPesos}
    />
  ));

  return (
    <Container sx={{ display: 'flex', marginTop: '5rem' }}>
      <Box>
        <Typography>Please enter the number of bills </Typography>
        {BillFormArray}
      </Box>
      <Box>
        <TotalContainer totalResultPesos={totalResultPesos} />
      </Box>
    </Container>
  );
}
