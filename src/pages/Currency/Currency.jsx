import { Currency } from 'components/Currency/Currency';
import { ContainerTotal } from 'components/Currency/Currency.styled';
import { Header } from 'components/Header/Header';
import { Mobile } from 'components/Media/Media';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import Navigation from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { selectLogoutModalOpen } from 'redux/global/selectors';

const CurrencyPage = () => {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();

  useEffect(() => {
    if (isNotMobile) navigate('/');
  }, [isNotMobile, navigate]);

  return (
    <>
      <Mobile>
        <Header />
        {isModalLogoutOpen && (
          <ModalContainer>
            <ModalLogout />
          </ModalContainer>
        )}
        <main>
          <ContainerTotal>
            <Navigation />
            <Currency />
          </ContainerTotal>
        </main>
      </Mobile>
    </>
  );
};

export default CurrencyPage;
