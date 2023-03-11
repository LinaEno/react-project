import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { randomAvatar } from '../../utils/randomAvatar';
import { getUserName } from 'redux/auth/authSelectors';

import { ReactComponent as Logo } from '../../images/Group.svg';
import {
  HeaderStyled,
  UserName,
  Delimiter,
  Link,
  UserBox,
  Avatar,
  Container,
  Title,
} from './Header.styled';

export const Header = () => {
  const userName = useSelector(getUserName);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <HeaderStyled>
      <Container>
        <Link to={'/'}>
          <Logo />

          <Title> Wallet</Title>
        </Link>

        <UserBox>
          <LangSwitcher />
          <Avatar>
            <img src={randomAvatar} alt="Avatar" />
          </Avatar>
          <UserName>{userName}</UserName>
          {isTablet && <Delimiter></Delimiter>}
          <ButtonLogout />
        </UserBox>
      </Container>
    </HeaderStyled>
  );
};
