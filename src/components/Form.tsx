import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Paper, TextField, Typography } from '@mui/material';

type FormValues = {
  bill: number;
};
interface FormProps {
  billValue: number;
  setTotalResultPesos: (result: number) => void;
}

export default function Form({ billValue, setTotalResultPesos }: FormProps) {
  const { register, handleSubmit } = useForm<FormValues>();
  const [result, setResult] = useState<number | null>(null);
  const onSubmit = (data: FormValues) => {
    const RESULT: number = data.bill * billValue;

    setResult(RESULT);
    setTotalResultPesos(RESULT);
  };

  return (
    <Box sx={{ display: 'flex', marginTop: '2rem' }}>
      <form onChange={handleSubmit(onSubmit)} noValidate>
        <TextField
          id={billValue.toString()}
          label={`$${billValue}`}
          sx={{ width: '12.8rem' }}
          variant='outlined'
          {...register('bill', {
            valueAsNumber: true,
          })}
        />
      </form>
      <Paper
        variant='outlined'
        sx={{
          mx: '3rem',
          width: '12.8rem',
          padding: '1rem 2rem',
        }}
      >
        <Typography>$ {result}</Typography>
      </Paper>
    </Box>
  );
}
