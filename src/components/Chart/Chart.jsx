import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughnutBox, ChartContainer, ChartLabel } from './Chart.styled';
import { useSelector } from 'react-redux';
import {
  selectBalance,
  selectCategories,
  selectTransactionsWithCategories,
} from 'redux/transactions/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export function Chart() {
  const transactions = useSelector(selectTransactionsWithCategories);

  const expense = transactions.filter(t => t.type === 'EXPENSE');
  const categories = useSelector(selectCategories);

  const dataExpense = expense.map(i => Math.abs(i.amount));

  console.log(dataExpense);
  const total = useSelector(selectBalance);
  const categoriesLabesData = expense.map(elem => elem.category.name);
  console.log(categoriesLabesData);

  const data = {
    labels: categoriesLabesData,
    datasets: [
      {
        data: dataExpense,
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
