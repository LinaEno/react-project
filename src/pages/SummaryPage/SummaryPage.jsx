import { Chart } from 'components/Chart/Chart';
import Layout from 'components/Layout/Layout';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { StatisticTitle, Wrap } from './SummaryPage.styled';
import { useTranslation } from 'react-i18next';

function SummaryPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Layout />
      <StatisticTitle>{t('statisticsTitle')}</StatisticTitle>
      <Wrap>
        <Chart />
        <StatisticBox />
      </Wrap>
    </div>
  );
}

export default WithAuthRedirect(SummaryPage, '/login');
