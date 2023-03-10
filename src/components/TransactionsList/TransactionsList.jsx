import React, { useEffect } from 'react';
import { ReactComponent as EditIcon } from 'images/Icon.svg';

import { useTranslation } from 'react-i18next';

import {
  Section,
  Container,
  Table,
  TableHead,
  TableBody,
  DeleteButton,
  EditButton,
  List,
  Item,
  Wrapper,
  Title,
  Stat,
  StatSum,
} from './TransactionsList.styled';

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
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';

const columns = [
  {
    title: 'Data',
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

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const elementToScroll = useRef(null);

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
    <Section ref={elementToScroll}>
      <Container>
        {!isTablet && (
          <List>
            {currentTransactions.map(transaction => (
              <Item key={transaction.id} type={transaction.type}>
                <Wrapper>
                  <Title>{t('transactionsTableDate')}</Title>
                  <Stat>{moment(transaction.transactionDate).format('L')}</Stat>
                </Wrapper>
                <Wrapper>
                  <Title>{t('transactionsTableType')}</Title>
                  <Stat>{transaction.type === 'INCOME' ? '+' : '-'}</Stat>
                </Wrapper>
                <Wrapper>
                  <Title>{t('transactionsTableCategory')}</Title>
                  <Stat>{transaction?.category?.name}</Stat>
                </Wrapper>
                <Wrapper>
                  <Title>{t('transactionsTableComment')}</Title>
                  <Stat>{transaction.comment}</Stat>
                </Wrapper>
                <Wrapper>
                  <Title>{t('transactionsTableAmount')}</Title>
                  <StatSum type={transaction.type}>
                    {Math.abs(transaction.amount).toFixed(2)}
                  </StatSum>
                </Wrapper>
                <Wrapper>
                  <DeleteButton
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    {t('btnDelete')}
                  </DeleteButton>
                  <EditButton
                    onClick={() =>
                      dispatch(openModalEditTransaction(transaction))
                    }
                  >
                    <EditIcon />
                    {t('btnDelete')}
                  </EditButton>
                </Wrapper>
              </Item>
            ))}
          </List>
        )}
        {isTablet && (
          <Table>
            <thead>
              <tr>
                {columns.map(col => (
                  <TableHead key={col.key}>{col.title}</TableHead>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentTransactions.map(transaction => (
                <tr key={transaction.id}>
                  <TableBody>
                    {moment(transaction.transactionDate).format('L')}
                  </TableBody>
                  <TableBody>
                    {transaction.type === 'INCOME' ? '+' : '-'}
                  </TableBody>
                  <TableBody>{transaction?.category?.name}</TableBody>
                  <TableBody>{transaction.comment}</TableBody>
                  <TableBody type={transaction.type}>
                    {Math.abs(transaction.amount).toFixed(2)}
                  </TableBody>
                  <TableBody>
                    <EditButton
                      onClick={() =>
                        dispatch(openModalEditTransaction(transaction))
                      }
                    >
                      <EditIcon />
                    </EditButton>
                    <DeleteButton
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >
                      {t('btnDelete')}
                    </DeleteButton>
                  </TableBody>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {transactions.length > itemsPerPage && (
          <Pagination scrollAnchor={elementToScroll} />
        )}
      </Container>
    </Section>
  );
}
