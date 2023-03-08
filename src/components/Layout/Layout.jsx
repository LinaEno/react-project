import Balance from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Desktop, Mobile, Tablet } from 'components/Media/Media';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectLogoutModalOpen,
  selectModalAddTransactionOpen,
} from 'redux/global/selectors';

const Layout = () => {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  return (
    <div>
      <Header />
      {isModalLogoutOpen && (
        <ModalContainer>
          <ModalLogout />
        </ModalContainer>
      )}
      <Navigation />
      <Balance />
      <Tablet>
        <Currency />
      </Tablet>
      <Desktop>
        <Currency />
      </Desktop>

      {/* <Weather /> */}
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && (
        <ModalContainer>
          {/* <ModalAddTransaction /> */}
          <ModalAddTransaction />
        </ModalContainer>
      )}
    </div>
  );
};

export default Layout;
