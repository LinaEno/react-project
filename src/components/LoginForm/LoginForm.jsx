import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Preview,
  Title,
  LoginSection,
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
  ButtonActive,
  Button,
  StyledNavLink,
  Error,
  IconSvg,
} from './LoginForm.styled';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
// import { ReactComponent as FrameLogin } from '../../images/svg/frameLogin.svg';
import emailIcon from '../../images/svg/email.svg';
import passIcon from '../../images/svg/password.svg';
import { Desktop, Tablet, Mobile, Default } from '../Media/Media';
import svgIcon from '../../images/svg/frameLogin.svg';

const schema = yup
  .object({
    email: yup.string().email().required('E-mail is required'),
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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (token !== null) navigate('/');
  }, [token, navigate]);

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));

    reset();
  };

  return (
    <LoginSection>
      <Default>
        <Preview>
          <Tablet>
            <IconSvg src={svgIcon} alt="img" />
            {/* <FrameLogin width={260} height={250} /> */}
          </Tablet>
          <Desktop>
            {/* <FrameLogin width={435} height={420} /> */}
            <IconSvg src={svgIcon} alt="email" />
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
            <Link>Wallet</Link>
          </LogoBox>
          <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Label>
              <Icon src={emailIcon} alt="email" />
              <Input type="email" {...register('email')} placeholder="E-mail" />
            </Label>
            {errors?.email && (
              <Error style={{ top: '14%' }}>{errors.email.message}</Error>
            )}
            <Label>
              <Icon src={passIcon} alt="email" />
              <Input
                type={toggle ? 'text' : 'password'}
                {...register('password')}
                placeholder="Password"
              />
              {!toggle ? (
                <Eye
                  id="passlock"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <BsEyeSlashFill />
                </Eye>
              ) : (
                <Eye
                  id="showpass"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <BsEyeFill />
                </Eye>
              )}
            </Label>
            {errors?.password && (
              <Error style={{ top: '42%' }}>{errors.password.message}</Error>
            )}
            <ButtonsList>
              <ButtonActive type="submit">Log in</ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/register'}>Register</StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </LoginSection>
  );
};

export default LoginForm;
