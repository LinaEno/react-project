import Balance from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Header } from 'components/Header/Header';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
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
      <Header />
      {isModalLogoutOpen && (
        <ModalContainer>
          <ModalLogout />
        </ModalContainer>
      )}
      <Navigation />
      <Balance />
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && (
        <ModalContainer>
          <div>Add Transaction Info</div>
        </ModalContainer>
      )}
    </div>
  );
};

export default DashboardPage;
