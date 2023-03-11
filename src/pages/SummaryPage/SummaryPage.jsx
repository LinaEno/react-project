import { Chart } from 'components/Chart/Chart';
import Layout from 'components/Layout/Layout';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';

import { Default, Desktop, Tablet } from 'components/Media/Media';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { ContainerTotal } from 'components/Currency/Currency.styled';
import { StatisticTitle, Wrap } from './SummaryPage.styled';
import { Box, Wrapper } from 'components/Layout/Layout.styled';
import { useTranslation } from 'react-i18next';

function SummaryPage() {
  const { t } = useTranslation();
  return (
    <>
      <Layout />
      <main>
        <ContainerTotal>
          <Wrapper>
            <Box>
              <Navigation />
              <Default>
                <Balance />
              </Default>
            </Box>
            <Tablet>
              <Currency />
            </Tablet>
            <Desktop>
              <Currency />
            </Desktop>
          </Wrapper>
          <div>
            <StatisticTitle>{t('statisticsTitle')}</StatisticTitle>
            <Wrap>
              <Chart />
              <StatisticBox />
            </Wrap>
          </div>
        </ContainerTotal>
      </main>
    </>
  );
}

export default SummaryPage;
