import React, { useEffect } from 'react';
import { ReactComponent as EditIcon } from 'images/Icon.svg';
import { useTranslation } from 'react-i18next';
import { Table, DeleteButton } from './TransactionsList.styled';
import {
  fetchTransactions,
  fetchCategories,
} from '../../redux/transactions/operations';
import { useSelector, useDispatch } from 'react-redux';

import { selectTransactionsWithCategories } from '../../redux/transactions/selectors';

const columns = [
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Type',
    key: 'type',
  },
  {
    title: 'Category',
    key: 'category',
  },
  {
    title: 'Comment',
    key: 'comment',
  },
  {
    title: 'Sum',
    key: 'sum',
  },
  {
    title: '',
    key: 'actions',
  },
];

export function TransactionsList() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactionsWithCategories);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.transactionDate}</td>
            <td>{transaction.type === 'INCOME' ? '+' : '-'}</td>
            <td>{transaction.category.name}</td>
            <td>{transaction.comment}</td>
            <td>{transaction.amount}</td>
            <td className="buttonsContainer">
              <button className="editButton">
                <EditIcon />
              </button>
              <DeleteButton>Delete</DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
