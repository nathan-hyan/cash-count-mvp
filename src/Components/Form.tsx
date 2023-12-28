import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';

export default function Form() {
  const { register } = useForm();

  return (
    <form>
      <label htmlFor='username'>
        <Typography>Username</Typography>
        <input {...register('username')} type='text' id='username' />
      </label>
    </form>
  );
}
