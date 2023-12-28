import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';

export default function Form() {
  const form = useForm();
  const { register } = form;
  const { name, ref, onChange, onBlur } = register('username');
  return (
    <form>
      <label htmlFor='username'>
        <Typography>Username</Typography>
        <input
          type='text'
          id='username'
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </form>
  );
}
