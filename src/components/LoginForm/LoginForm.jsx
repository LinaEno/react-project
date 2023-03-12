import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { useState } from 'react';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import {
  Preview,
  Title,
  LoginSection,
  Backdrop,
  Content,
  FormBox,
  LogoBox,
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

import { useTranslation } from 'react-i18next';
import { TitleH1 } from 'components/RegistrationForm/Registration.styled';



const LoginForm = () => {
  const { t } = useTranslation();
  const schema = yup
  .object({
    email: yup.string().email().required(t('registerFormEmail')),
    password: yup
      .string()
      .required(t('registerFormPassword'))
      .min(6, (t('registerFormPasswordIsTooShort')))
      .max(12, (t('registerFormPasswordIsTooLong'))),
  })
  .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));

    reset();
  };

  return (
    <LoginSection>
      <Default>
        <Preview>
          <Tablet>
            <IconSvg
              src={svgIcon}
              alt="img"
              style={{ width: '260px', height: '250px' }}
            />
            {/* <FrameLogin width={260} height={250} /> */}
          </Tablet>
          <Desktop>
            {/* <FrameLogin width={435} height={420} /> */}
            <IconSvg
              src={svgIcon}
              alt="img"
              style={{ width: '435px', height: '420px' }}
            />
          </Desktop>
          <Title>{t('appText')}</Title>
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
            <TitleH1>{t('register.title')}</TitleH1>
            <LangSwitcher />
          </LogoBox>
          <FormBox onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Label>
              <Icon src={emailIcon} alt="email" />
              <Input
                type="email"
                {...register('email')}
                placeholder={t('register.email')}
              />
            </Label>
            {errors?.email && (
              <Error style={{ top: '14%' }}>{errors.email.message}</Error>
            )}
            <Label>
              <Icon src={passIcon} alt="email" />
              <Input
                type={toggle ? 'text' : 'password'}
                {...register('password')}
                placeholder={t('register.password')}
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
              <ButtonActive type="submit">
                {t('register.btnLogIn')}
              </ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/register'}>
                  {t('register.btnReg')}
                </StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </LoginSection>
  );
};

export default LoginForm;
