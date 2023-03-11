import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summaryTransactions } from 'redux/transactions/operations';
import { useTranslation } from 'react-i18next';
import {
  selectExpenseSum,
  selectIncomeSum,
  selectSummary,
  selectTransactions,
} from 'redux/transactions/selectors';

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
  DropdownMenuMonth,
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
  const { t } = useTranslation();
  const summary = useSelector(selectSummary);
  const expense = useSelector(selectExpenseSum);
  const income = useSelector(selectIncomeSum);
  const dispatch = useDispatch();
  const all = useSelector(selectTransactions);
  let expenses = summary.filter(el => el.total < 0);

  if (expenses.length > 0) {
    expenses = expenses.map((el, i) => ({
      ...el,
      color: colors[i],
    }));
  }

  const [monthDropdownShown, setMonthDropdownShown] = useState(false);
  const [yearDropdownShown, setYearDropdownShown] = useState(false);

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  useEffect(() => {
    dispatch(summaryTransactions({ month: +month + 1, year }));
  }, [dispatch, month, year, all]);

  function handleMonthChange(e) {
    setMonth(e.target.dataset.value);
    toggleMonthDropdown();
  }

  function handleYearChange(e) {
    setYear(e.target.dataset.value);
    toggleYearDropdown();
  }

  function toggleMonthDropdown() {
    setMonthDropdownShown(state => !state);
    setYearDropdownShown(false);
  }

  function toggleYearDropdown() {
    setYearDropdownShown(state => !state);
    setMonthDropdownShown(false);
  }

  return (
    <WrapperTable>
      <SelectsList>
        <DropdownMenuMonth
          className={monthDropdownShown ? 'dropdownShown' : ''}
        >
          <SelectButton onClick={toggleMonthDropdown}>
            {months[month]}
          </SelectButton>

          <SelectDate name="month">
            <Drop data-value="0" onClick={handleMonthChange}>
              {t('monthStatJanuary')}
            </Drop>
            <Drop data-value="1" onClick={handleMonthChange}>
              {t('monthStatFebruary')}
            </Drop>
            <Drop data-value="2" onClick={handleMonthChange}>
              {t('monthStatMarch')}
            </Drop>
            <Drop data-value="3" onClick={handleMonthChange}>
              {t('monthStatApril')}
            </Drop>
            <Drop data-value="4" onClick={handleMonthChange}>
              {t('monthStatMay')}
            </Drop>
            <Drop data-value="5" onClick={handleMonthChange}>
              {t('monthStatJune')}
            </Drop>
            <Drop data-value="6" onClick={handleMonthChange}>
              {t('monthStatJuly')}
            </Drop>
            <Drop data-value="7" onClick={handleMonthChange}>
              {t('monthStatAugust')}
            </Drop>
            <Drop data-value="8" onClick={handleMonthChange}>
              {t('monthStatSeptember')}
            </Drop>
            <Drop data-value="9" onClick={handleMonthChange}>
              {t('monthStatOctober')}
            </Drop>
            <Drop data-value="10" onClick={handleMonthChange}>
              {t('monthStatNovember')}
            </Drop>
            <Drop data-value="11" onClick={handleMonthChange}>
              {t('monthStatDecember')}
            </Drop>
          </SelectDate>
        </DropdownMenuMonth>
        <DropdownMenu className={yearDropdownShown ? 'dropdownShown' : ''}>
          <SelectButton onClick={toggleYearDropdown}>{year}</SelectButton>
          <SelectDate name="year">
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
            <TH>{t('titleTable.transactionsTableCategory')}</TH>
            <TH>{t('titleTable.transactionsTableAmount')}</TH>
          </TR>
        </THead>
        {expenses.length > 0 && (
          <TableBody>
            {expenses.map(el => {
              return (
                <TableRow key={el.name}>
                  <Color color={el.color}>{t(`categories.${el.name}`)}</Color>

                  {/* <Color color={el.color}>{el.name}</Color> */}
                  <td>
                    {Math.abs(el.total)
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </td>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
      <Sum>
        {t('statisticsExpenses')}
        <Expenses>
          {Math.abs(expense)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </Expenses>
      </Sum>
      <Sum>
        {t('statisticsIncomes')}
        <Income>
          {income
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </Income>
      </Sum>
    </WrapperTable>
  );
}
