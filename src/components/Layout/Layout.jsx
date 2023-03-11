import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Header } from 'components/Header/Header';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useSelector } from 'react-redux';
import {
  selectLogoutModalOpen,
  selectModalAddTransactionOpen,
} from 'redux/global/selectors';
import { ContainerTotal } from 'components/Currency/Currency.styled';

const Layout = () => {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  return (
    <div>
      <Header />
      <ContainerTotal>
        {isModalLogoutOpen && (
          <ModalContainer>
            <ModalLogout />
          </ModalContainer>
        )}
        <ButtonAddTransactions />
        {isModalAddTransactionOpen && (
          <ModalContainer>
            <ModalAddTransaction />
          </ModalContainer>
        )}
      </ContainerTotal>
    </div>
  );
};

export default Layout;
