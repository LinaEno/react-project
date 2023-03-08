import React, { useEffect } from 'react';
import { ReactComponent as EditIcon } from 'images/Icon.svg';

import { useTranslation } from 'react-i18next';

import { Table, DeleteButton, Text } from './TransactionsList.styled';

import {
  fetchTransactions,
  fetchCategories,
  deleteTransaction,
} from '../../redux/transactions/operations';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectPage,
  selectPerPage,
  selectTransactionsWithCategories,
} from '../../redux/transactions/selectors';
import { openModalEditTransaction } from '../../redux/global/slice';
import moment from 'moment';
import 'moment/locale/uk';
import { Pagination } from 'components/Pagination/Pagination';

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
  const page = useSelector(selectPage);
  const itemsPerPage = useSelector(selectPerPage);
  const endOffset = page + itemsPerPage;
  const currentTransactions = transactions.slice(page, endOffset);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (transactions.length === 0) return null;

  const handleDeleteTransaction = transactionId => {
    dispatch(deleteTransaction(transactionId)).then(() => {
      dispatch(fetchTransactions());
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{moment(transaction.transactionDate).format('L')}</td>
              <td>{transaction.type === 'INCOME' ? '+' : '-'}</td>

              <td>{transaction?.category?.name}</td>

              <td>{transaction.comment}</td>
              <Text type={transaction.type}>
                {Math.abs(transaction.amount)}
              </Text>
              <td className="buttonsContainer">
                <button
                  className="editButton"
                  onClick={() =>
                    dispatch(openModalEditTransaction(transaction))
                  }
                >
                  <EditIcon />
                </button>
                <DeleteButton
                  onClick={() => handleDeleteTransaction(transaction.id)}
                >
                  Delete
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {transactions.length > itemsPerPage && <Pagination />}
    </>
  );
}
