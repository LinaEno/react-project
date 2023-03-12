import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperation';

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
  Label,
  Icon,
  Eye,
  Input,
  ButtonsList,
  Button,
  ButtonActive,
  StyledNavLink,
  Error,
  Ribbon,
  IconSvg,
  TitleH1,
} from './Registration.styled';
import { ReactComponent as Logo } from '../../images/svg/logo.svg';
// import { ReactComponent as FrameRegister } from '../../images/svg/frameRegister.svg';
import emailIcon from '../../images/svg/email.svg';
import passIcon from '../../images/svg/password.svg';
import nameIcon from '../../images/svg/name.svg';
import { Desktop, Tablet, Mobile, Default } from '../Media/Media';
import css from './Ribbon.module.css';

import svgIcon from '../../images/svg/frameRegister.svg';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      username: yup
        .string()
        .required(t('registerFormUser'))
        .min(2, t('registerFormEmailIsTooShort'))
        .max(12, t('registerFormEmailIsTooLong')),
      email: yup.string().email().required(t('registerFormEmail')),
      password: yup
        .string()
        .required(t('registerFormPassword'))
        .min(6, t('registerFormPasswordIsTooShort'))
        .max(12, t('registerFormPasswordIsTooLong')),
      cpassword: yup
        .string()
        .required(t('registerFormConfirmPassword'))
        .min(6, t('registerFormPasswordIsTooShort'))
        .max(12, t('registerFormPasswordIsTooLong'))
        .oneOf([yup.ref('password')], t('passwordError')),
    })
    .required();
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

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const onSubmit = ({ username, email, password }) => {
    dispatch(registration({ username, email, password }));

    reset();
  };

  const [ribbon, setRibbon] = useState('');
  const [pass, setPass] = useState('pass');
  const [cpass, setCpass] = useState('cpass');

  useEffect(() => {
    if (pass.length > 5) {
      setRibbon('putPass');
    } else if (pass.length <= 5) {
      setRibbon('shortPass');
    }

    if (cpass === pass) {
      setRibbon('corectPass');
    }
  }, [pass, cpass]);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'password':
        setPass(value);
        break;

      case 'cpassword':
        setCpass(value);
        break;

      default:
        return;
    }
  };

  return (
    <RegisterSection>
      <Default>
        <Preview>
          <Tablet>
            <IconSvg
              src={svgIcon}
              alt="img"
              style={{ width: '260px', height: '250px' }}
            />
            {/* <FrameRegister width={260} height={250} /> */}
          </Tablet>
          <Desktop>
            <IconSvg
              src={svgIcon}
              alt="email"
              style={{ width: '435px', height: '420px' }}
            />
            {/* <FrameRegister width={435} height={420} /> */}
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
              <Error style={{ top: '9%' }}>{errors.email.message}</Error>
            )}
            <Label>
              <Icon src={passIcon} alt="pass" />
              <Input
                {...register('password')}
                placeholder={t('register.password')}
                type={toggle1 ? 'text' : 'password'}
                onChange={handleChange}
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
                placeholder={t('register.cpassword')}
                onChange={handleChange}
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
              <Ribbon>
                <div className={css[ribbon]} />
              </Ribbon>
            </Label>
            {errors?.cpassword && (
              <Error style={{ top: '46%' }}>{errors.cpassword.message}</Error>
            )}
            <Label>
              <Icon src={nameIcon} alt="name" />
              <Input
                type="text"
                {...register('username')}
                placeholder={t('register.name')}
              />
            </Label>
            {errors?.username && (
              <Error style={{ top: '62%' }}>{errors.username.message}</Error>
            )}
            <ButtonsList>
              <ButtonActive type="submit">{t('register.btnReg')}</ButtonActive>
              <Button type="submit">
                <StyledNavLink to={'/login'}>
                  {t('register.btnLogIn')}
                </StyledNavLink>
              </Button>
            </ButtonsList>
          </FormBox>
        </Content>
      </Backdrop>
    </RegisterSection>
  );
};

export default RegistrationForm;
