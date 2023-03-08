import Balance from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { Header } from 'components/Header/Header';
import { ButtonLogout } from 'components/ButtonLogout/ButtonLogout';

import { Currency } from 'components/Currency/Currency';

import { ModalContainer } from 'components/ModalContainer/ModalContainer';

import { TransactionsList } from 'components/TransactionsList/TransactionsList';

import ModalLogout from 'components/ModalLogout/ModalLogout';
import Navigation from 'components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import {
  selectLogoutModalOpen,
  selectModalAddTransactionOpen,
} from 'redux/global/selectors';
import Weather from 'components/WeatherApp/WeatherApp';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { StatisticTitle, Wrap } from 'pages/SummaryPage/SummaryPage.styled';
import { Chart } from 'components/Chart/Chart';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';

import { Pagination } from 'components/Pagination/Pagination';


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
      <Currency />
      {/* <Weather /> */}
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && (
        <ModalContainer>
          {/* <ModalAddTransaction /> */}
          <ModalAddTransaction />
        </ModalContainer>
      )}
      <TransactionsList />

      <div>
        <StatisticTitle>Statistics</StatisticTitle>
        <Wrap>
          <Chart />
          <StatisticBox />
        </Wrap>
      </div>

      <Pagination />

    </div>
  );
};

export default DashboardPage;
