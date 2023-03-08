import Layout from 'components/Layout/Layout';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Layout />
      <TransactionsList />
    </div>
  );
};

export default HomePage;
