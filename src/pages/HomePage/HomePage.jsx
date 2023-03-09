import Layout from 'components/Layout/Layout';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

const HomePage = () => {
  return (
    <div>
      <Layout />
      <TransactionsList />
    </div>
  );
};

export default WithAuthRedirect(HomePage, '/');
