import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import { TransactionsList } from 'components/TransactionsList/TransactionsList'
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
          <div>Add Transaction Info</div>
        </ModalContainer>
      )}
      <TransactionsList/>
    </div>
  );
};

export default DashboardPage;
