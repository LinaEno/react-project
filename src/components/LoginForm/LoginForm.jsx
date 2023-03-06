import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/authOperation';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUserName } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password length should be at least 6 characters')
      .max(12, 'Password cannot exceed more than 12 characters'),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserName);

  const [toggle, setToggle] = useState(false);

  let password = watch('password', '');

  useEffect(() => {
    if (user !== null) navigate('/');
  }, [user, navigate]);

  const onSubmit = ({ name, email, password, cpassword }) => {
    dispatch(registration({ name, email, password, cpassword }));

    reset();
  };

  return (
    <section>
      <h2>Wallet</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label>
          <input type="email" {...register('email')} placeholder="E-mail" />
        </label>
        {errors?.email && (
          <div style={{ color: 'red' }}>{errors.email.message}</div>
        )}
        <label>
          <input
            type={toggle ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          {!toggle ? (
            <i
              id="passlock"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <BsEyeSlashFill />
            </i>
          ) : (
            <i
              id="showpass"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <BsEyeFill />
            </i>
          )}
        </label>
        {errors?.password && (
          <div style={{ color: 'red' }}>{errors.password.message}</div>
        )}
        <button type="submit">Log in</button>
        <button type="submit">
          <NavLink to={'/register'}>Register</NavLink>
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
