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

import {
  Preview,
  Title,
  RegisterSection,
  Backdrop,
  Content,
  FormBox,
  LogoBox,
  Link,
  Label,
  Icon,
  Eye,
  Input,
  ButtonsList,
  Button,
  ButtonActive,
  StyledNavLink,
  Error,
} from './Registration.styled';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
import { ReactComponent as FrameRegister } from '../../images/svg/frameRegister.svg';
import emailIcon from '../../images/svg/email.svg';
import passIcon from '../../images/svg/password.svg';
import nameIcon from '../../images/svg/name.svg';
import { Desktop, Tablet, Mobile, Default } from '../Media/Media';

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
    <RegisterSection>
      <Default>
        <Preview>
          <Tablet>
            <FrameRegister width={260} height={250} />
          </Tablet>
          <Desktop>
            <FrameRegister width={435} height={420} />
          </Desktop>
          <Title>Finance App</Title>
        </Preview>
      </Default>
      <Backdrop>
        <Content>
          <LogoBox>
            <Mobile>
              <Logo width={30} height={30} />
            </Mobile>
            <Default>
              <Logo width={40} height={40} />
            </Default>
            <Link>{t('register.title')}</Link>
          </LogoBox>
          <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Label>
              <Icon src={emailIcon} alt="email" />
              <Input type="email" {...register('email')} placeholder="E-mail" />
            </Label>
            {errors?.email && (
              <Error style={{ top: '9%' }}>{errors.email.message}</Error>
            )}
            <Label>
              <Icon src={passIcon} alt="pass" />
              <Input
                {...register('password')}
                placeholder="Password"
                type={toggle1 ? 'text' : 'password'}
              />
              {!toggle1 ? (
                <Eye
                  id="passlock"
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <BsEyeSlashFill />
                </Eye>
              ) : (
                <Eye
                  id="showpass"
                  onClick={() => {
                    setToggle1(!toggle1);
                  }}
                >
                  <BsEyeFill />
                </Eye>
              )}
            </Label>
            {errors?.password && (
              <Error style={{ top: '27%' }}>{errors.password.message}</Error>
            )}
            <Label>
              <Icon src={passIcon} alt="pass" />
              <Input
                type={toggle2 ? 'text' : 'password'}
                {...register('cpassword', {
                  validate: value => value === getValues('password'),
                })}
                placeholder="Confirm password"
              />
              {!toggle2 ? (
                <Eye
                  id="passlock"
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}
                >
                  <BsEyeSlashFill />
                </Eye>
              ) : (
                <Eye
                  id="showpass"
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}
                >
                  <BsEyeFill />
                </Eye>
              )}
            </Label>
            {errors?.cpassword && (
              <Error style={{ top: '44%' }}>{errors.cpassword.message}</Error>
            )}
            <Label>
              <Icon src={nameIcon} alt="name" />
              <Input
                type="text"
                {...register('username')}
                placeholder="First name"
              />
            </Label>
            {errors?.name && (
              <Error style={{ top: '60%' }}>{errors.name.message}</Error>
            )}
            <ButtonsList>
              <ButtonActive type="submit">Register</ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/login'}>Log in</StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </RegisterSection>
  );
};

export default RegistrationForm;
