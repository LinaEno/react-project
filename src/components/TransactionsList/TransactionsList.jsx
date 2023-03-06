
import React, { useEffect } from "react";
import { ReactComponent as EditIcon } from 'images/Icon.svg';
import { Table } from "./TransactionsList.styled";
import { fetchTransactions, fetchCategories } from '../../redux/transactions/operations';
import { useSelector, useDispatch } from "react-redux";
import { selectTransactionsWithCategories } from '../../redux/transactions/selectors';

const columns = [
  {
    title: 'Date',
    key: 'date'
  },
  {
    title: 'Type',
    key: 'type'
  },
  {
    title: 'Category',
    key: 'category'
  },
  {
    title: 'Comment',
    key: 'comment'
  },
  {
    title: 'Sum',
    key: 'sum'
  },
  {
    title: '',
    key: 'actions'
  },
]

const TRANSACTIONS_MOCK = [
  {
    "id": "1",
    "transactionDate": "03.04.2022",
    "type": "INCOME",
    "categoryId": "5",
    "userId": "string",
    "comment": "Gift for your wife",
    "amount": 0,
    "balanceAfter": 0
  }
]


export function TransactionsList ({ transaction = TRANSACTIONS_MOCK }) {
  const dispatch = useDispatch();
  // const transactions = useSelector(selectTransactionsWithCategories);
  
  
  useEffect(() => {
    dispatch(fetchTransactions())
    dispatch(fetchCategories())
  }, [dispatch]);
  

  return (
      <Table>
        <thead>
          <tr>
            {columns.map(col => <th key={col.key}>{col.key}</th>)}
          </tr>
        </thead>
        <tbody>
          {transaction.map(({transaction}) => (
            <tr key={transaction.id}>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.type === 'INCOME' ? '-' : '+'}</td>
              <td>{transaction.category.name}</td>
              <td>{transaction.comment}</td>
              <td>{transaction.amount}</td>
              <td>
                <button className="editButton"><EditIcon/></button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};
