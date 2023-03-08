import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutBox, ChartContainer, ChartLabel } from './Chart.styled';
import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectPeriodTotal,
  selectSummary,
  selectTransactionsWithCategories,
} from 'redux/transactions/selectors';
import { selectUserBalance } from 'redux/auth/authSelectors';

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
        data: expenses.map(el => el.total.toString().replace('-', '')),
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
      <ChartLabel>${total}</ChartLabel>
    </ChartContainer>
  );
}
