import Balance from 'components/Balance/Balance';
import { ContainerTotal } from 'components/Currency/Currency.styled';

import Layout from 'components/Layout/Layout';
import { Box, Wrapper } from 'components/Layout/Layout.styled';
import { Desktop, Tablet } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Currency } from 'components/Currency/Currency';
import News from './News';

const NewsPage = () => {
  return (
    <>
      <Layout />
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
        <News />
      </ContainerTotal>
    </>
  );
};

export default WithAuthRedirect(NewsPage, '/login');
