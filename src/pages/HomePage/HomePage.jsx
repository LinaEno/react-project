import Layout from 'components/Layout/Layout';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

const HomePage = () => {
  return (
    <>
      <Layout />
      <TransactionsList />
    </>
  );
};

export default WithAuthRedirect(HomePage, '/login');
