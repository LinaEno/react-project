import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectLogoutModalOpen,
  selectModalAddTransactionOpen,
} from 'redux/global/selectors';

const DashboardPage = () => {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);

  return (
    <div>
      Hello
      <ButtonLogout />
      {isModalLogoutOpen && (
        <ModalContainer>
          <div>Logout Info</div>
        </ModalContainer>
      )}
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && (
        <ModalContainer>
          <ModalAddTransaction />
        </ModalContainer>
      )}
    </div>
  );
};

export default DashboardPage;
