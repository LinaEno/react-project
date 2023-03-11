import Balance from 'components/Balance/Balance';
import { ContainerTotal } from 'components/Currency/Currency.styled';

import Layout from 'components/Layout/Layout';
import { Box, Wrapper } from 'components/Layout/Layout.styled';
import { Desktop, Tablet } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Currency } from 'components/Currency/Currency';

const HomePage = () => {
  return (
    <>
      <Layout />
      <main>
        <ContainerTotal>
          <Wrapper>
            <Box>
              <Navigation />
              <Balance />
            </Box>
            <Tablet>
              <Currency />
            </Tablet>
            <Desktop>
              <Currency />
            </Desktop>
          </Wrapper>
          <TransactionsList />
        </ContainerTotal>
      </main>
    </>
  );
};

export default WithAuthRedirect(HomePage, '/login');
