import { Chart } from 'components/Chart/Chart';
import { StatisticBox } from 'components/StatisticBox/StatisticBox';
import { StatisticTitle, Wrap } from './SummaryPage.styled';

function SummaryPage() {
  return (
    <div>
      <StatisticTitle>Statistics</StatisticTitle>
      <Wrap>
        <Chart />
        <StatisticBox />
      </Wrap>
    </div>
  );
}

export default SummaryPage;
