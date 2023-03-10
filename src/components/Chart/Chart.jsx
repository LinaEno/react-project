import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutBox, ChartContainer, ChartLabel } from './Chart.styled';
import { useSelector } from 'react-redux';
import { selectPeriodTotal, selectSummary } from 'redux/transactions/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export function Chart() {
  const total = useSelector(selectPeriodTotal);
  const summary = useSelector(selectSummary);

  const expenses = summary.filter(el => el.total < 0);

  const data = {
    labels: expenses.map(el => el.name),
    datasets: [
      {
        data: expenses.map(el => Math.abs(el.total.toString())),
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <DoughnutBox data={data} />
      <ChartLabel>
        &#8372;
        {Math.abs(total)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
      </ChartLabel>
    </ChartContainer>
  );
}
