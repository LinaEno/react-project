import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getUserName } from 'redux/auth/authSelectors';
import { ReactComponent as Logo } from '../../img/Group.svg';
import {
  HeaderComponent,
  // HeaderContainer,
  LogoTitle,
  UserName,
  Delimiter,
  LogoBox,
  Link,
  UserBox,
} from './Header.styled';

export const Header = () => {
  const userName = useSelector(getUserName);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <HeaderComponent>
      <LogoBox>
        <Logo />
        <LogoTitle>
          <Link to={'/'}>Wallet</Link>
        </LogoTitle>
      </LogoBox>
      <UserBox>
        <LangSwitcher />

        <UserName>{userName}</UserName>
        {!isMobile && <Delimiter></Delimiter>}
        <ButtonLogout />
      </UserBox>
    </HeaderComponent>
  );
};
