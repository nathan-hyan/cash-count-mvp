import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

import TotalOutput from '~components/TotalOutput';
import useFetchDolarValue from '~hooks/useFetchDolarValue';

type TotalResult = {
  totalResultPesos: number;
};

export default function TotalContainer({ totalResultPesos }: TotalResult) {
  const DOLAR_INFORMAL: string = useFetchDolarValue();
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    setTotalSum((prevTotalSum) => prevTotalSum + totalResultPesos);
  }, [totalResultPesos]);
  const TOTAL_SUM_USD: number = totalSum / parseFloat(DOLAR_INFORMAL);

  const OUTPUT_OPTIONS: {
    id: number;
    currencySymbol: string;
    title: string;
    outputValue: number;
  }[] = [
    {
      id: 0,
      currencySymbol: 'ARS',
      title: 'Total in AR pesos',
      outputValue: totalSum,
    },
    {
      id: 1,
      currencySymbol: 'USD',
      title: 'Total in US dollar',
      outputValue: TOTAL_SUM_USD,
    },
  ];

  const TOTAL_OUTPUT_ARRAY = OUTPUT_OPTIONS.map(
    ({ id, currencySymbol, title, outputValue }) => {
      return (
        <TotalOutput
          key={id}
          currencySymbol={currencySymbol}
          title={title}
          outputValue={outputValue}
        />
      );
    }
  );

  return (
    <Container
      sx={{
        mt: '3.5rem',
      }}
    >
      {TOTAL_OUTPUT_ARRAY}
    </Container>
  );
}
