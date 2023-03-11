import { Header } from 'components/Header/Header';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
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
      {isModalAddTransactionOpen && (
        <ModalContainer>
          <ModalAddTransaction />
        </ModalContainer>
      )}
    </div>
  );
};

export default Layout;
