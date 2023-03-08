import { Chart } from 'components/Chart/Chart';
import Layout from 'components/Layout/Layout';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';
import { StatisticTitle, Wrap } from './SummaryPage.styled';

function SummaryPage() {
  return (
    <div>
      <Layout />
      <StatisticTitle>Statistics</StatisticTitle>
      <Wrap>
        <Chart />
        <StatisticBox />
      </Wrap>
    </div>
  );
}

export default SummaryPage;
