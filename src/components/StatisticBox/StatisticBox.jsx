import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectTransactionsWithCategories } from 'redux/transactions/selectors';

import {
  SelectsList,
  SelectButton,
  DropdownMenu,
  SelectDate,
  Drop,
  WrapperTable,
  Table,
  THead,
  TR,
  TH,
  TableBody,
  TableRow,
  Sum,
  Expenses,
  Income,
  Color,
} from './StatisticBox.styled';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#784fca',
];

export function StatisticBox() {
  const transactions = useSelector(selectTransactionsWithCategories);
  const income = transactions.filter(t => t.type === 'INCOME');
  const expense = transactions.filter(t => t.type === 'EXPENSE');

  console.log(transactions);

  const totalIncome = income.reduce((ac, el) => {
    return ac + el.amount;
  }, 0);

  const totalExpense = expense.reduce((ac, el) => {
    return ac + el.amount;
  }, 0);

  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  function handleMonthChange(e) {
    setMonth(e.target.dataset.value);
  }

  function handleYearChange(e) {
    setYear(e.target.dataset.value);
  }

  return (
    <WrapperTable>
      <SelectsList>
        <DropdownMenu>
          <SelectButton>{months[month]}</SelectButton>

          <SelectDate name="month" className="dropdown-child">
            <Drop data-value="0" onClick={handleMonthChange}>
              January
            </Drop>
            <Drop data-value="1" onClick={handleMonthChange}>
              February
            </Drop>
            <Drop data-value="2" onClick={handleMonthChange}>
              March
            </Drop>
            <Drop data-value="3" onClick={handleMonthChange}>
              April
            </Drop>
            <Drop data-value="4" onClick={handleMonthChange}>
              May
            </Drop>
            <Drop data-value="5" onClick={handleMonthChange}>
              June
            </Drop>
            <Drop data-value="6" onClick={handleMonthChange}>
              July
            </Drop>
            <Drop data-value="7" onClick={handleMonthChange}>
              August
            </Drop>
            <Drop data-value="8" onClick={handleMonthChange}>
              September
            </Drop>
            <Drop data-value="9" onClick={handleMonthChange}>
              October
            </Drop>
            <Drop data-value="10" onClick={handleMonthChange}>
              November
            </Drop>
            <Drop data-value="11" onClick={handleMonthChange}>
              December
            </Drop>
          </SelectDate>
        </DropdownMenu>
        <DropdownMenu>
          <SelectButton>{year}</SelectButton>
          <SelectDate name="year" className="dropdown-child">
            <Drop data-value="2019" onClick={handleYearChange}>
              2019
            </Drop>
            <Drop data-value="2020" onClick={handleYearChange}>
              2020
            </Drop>
            <Drop data-value="2021" onClick={handleYearChange}>
              2021
            </Drop>
            <Drop data-value="2022" onClick={handleYearChange}>
              2022
            </Drop>
            <Drop data-value="2023" onClick={handleYearChange}>
              2023
            </Drop>
          </SelectDate>
        </DropdownMenu>
      </SelectsList>
      <Table>
        <THead>
          <TR>
            <TH>Category</TH>
            <TH>Sum</TH>
          </TR>
        </THead>
        {expense.length > 0 && (
          <TableBody>
            {expense.map(transaction => (
              <TableRow key={transaction.id}>
                <Color>{transaction.category.name}</Color>
                <td>{Math.abs(transaction.amount)}</td>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <Sum>
        Expenses: <Expenses>{Math.abs(totalExpense)}</Expenses>
      </Sum>
      <Sum>
        Income:<Income>{totalIncome}</Income>
      </Sum>
    </WrapperTable>
  );
}
