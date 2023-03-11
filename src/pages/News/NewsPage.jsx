import Balance from 'components/Balance/Balance';
import { ContainerTotal } from 'components/Currency/Currency.styled';
import { Box, Wrapper } from 'components/Layout/Layout.styled';
import { Default } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Currency } from 'components/Currency/Currency';
import News from './News';
import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectLogoutModalOpen } from 'redux/global/selectors';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';

const NewsPage = () => {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  return (
    <>
      {/* <Layout /> */}
      <Header />
      <ContainerTotal>
        {isModalLogoutOpen && (
          <ModalContainer>
            <ModalLogout />
          </ModalContainer>
        )}
        <Wrapper>
          <Box>
            <Navigation />
            <Default>
              <Balance />
            </Default>
          </Box>
          <Default>
            <Currency />
          </Default>
        </Wrapper>
        <News />
      </ContainerTotal>
    </>
  );
};

export default WithAuthRedirect(NewsPage, '/login');
