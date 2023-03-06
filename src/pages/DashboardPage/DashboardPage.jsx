import Balance from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';
import { Currency } from 'components/Currency/Currency';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';

import { TransactionsList } from 'components/TransactionsList/TransactionsList'


import ModalLogout from 'components/ModalLogout/ModalLogout';
import Navigation from 'components/Navigation/Navigation';

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
          <ModalLogout />
        </ModalContainer>
      )}
      <Navigation />
      <Balance />
      <Currency />
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
