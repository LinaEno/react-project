import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/authOperation';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const schema = yup
  .object({
    username: yup
      .string()
      .required()
      .min(2, 'Username length should be at least 2 characters')
      .max(12, 'Username cannot exceed more than 12 characters'),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password length should be at least 6 characters')
      .max(12, 'Password cannot exceed more than 12 characters'),
    cpassword: yup
      .string()
      .required('Confirm Password is required')
      .min(6, 'Password length should be at least 6 characters')
      .max(12, 'Password cannot exceed more than 12 characters')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  .required();

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (token !== null) navigate('/');
  }, [token, navigate]);

  const onSubmit = ({ username, email, password }) => {
    dispatch(registration({ username, email, password }));

    reset();
  };

  return (
    <section>
      <h2>{t('register.title')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label>
          <input type="email" {...register('email')} placeholder="E-mail" />
        </label>
        {errors?.email && (
          <div style={{ color: 'red' }}>{errors.email.message}</div>
        )}
        <label>
          <input
            {...register('password')}
            placeholder="Password"
            type={toggle1 ? 'text' : 'password'}
          />
          {!toggle1 ? (
            <i
              id="passlock"
              onClick={() => {
                setToggle1(!toggle1);
              }}
            >
              <BsEyeSlashFill />
            </i>
          ) : (
            <i
              id="showpass"
              onClick={() => {
                setToggle1(!toggle1);
              }}
            >
              <BsEyeFill />
            </i>
          )}
        </label>
        {errors?.password && (
          <div style={{ color: 'red' }}>{errors.password.message}</div>
        )}
        <label>
          <input
            type={toggle2 ? 'text' : 'password'}
            {...register('cpassword', {
              validate: value => value === getValues('password'),
            })}
            placeholder="Confirm password"
          />
          {!toggle2 ? (
            <i
              id="passlock"
              onClick={() => {
                setToggle2(!toggle2);
              }}
            >
              <BsEyeSlashFill />
            </i>
          ) : (
            <i
              id="showpass"
              onClick={() => {
                setToggle2(!toggle2);
              }}
            >
              <BsEyeFill />
            </i>
          )}
        </label>
        {errors?.cpassword && (
          <div style={{ color: 'red' }}>{errors.cpassword.message}</div>
        )}
        <label>
          <input
            type="text"
            {...register('username')}
            placeholder="First name"
          />
        </label>
        {errors?.name && (
          <div style={{ color: 'red' }}>{errors.name.message}</div>
        )}
        <button type="submit">Register</button>
        <button type="submit">
          <NavLink to={'/login'}>Log in</NavLink>
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
