import { Chart } from 'components/Chart/Chart';
import Layout from 'components/Layout/Layout';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { StatisticTitle, Wrap } from './SummaryPage.styled';
import { useTranslation } from 'react-i18next';
import { Desktop } from 'components/Media/Media';

function SummaryPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Layout />
      <Desktop>
        <Wrap>
          <Chart />
          <StatisticBox />
        </Wrap>
      </Desktop>
    </div>
  );
}

export default WithAuthRedirect(SummaryPage, '/login');
