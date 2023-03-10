import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { getUserName } from 'redux/auth/authSelectors';
import { ReactComponent as Logo } from '../../images/Group.svg';
import {
  HeaderStyled,
  UserName,
  Delimiter,
  Link,
  UserBox,
  Container,
} from './Header.styled';

export const Header = () => {
  const { t } = useTranslation();
  const userName = useSelector(getUserName);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <HeaderStyled>
      <Container>
        <Link to={'/'}>
          <Logo />
          {t('header.title')}
        </Link>

        <UserBox>
          <LangSwitcher />
          <UserName>{userName}</UserName>
          {isTablet && <Delimiter></Delimiter>}
          <ButtonLogout />
        </UserBox>
      </Container>
    </HeaderStyled>
  );
};
