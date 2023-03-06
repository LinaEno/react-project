import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
} from './operations';

const initialState = {
  categories: [],
  transactions: [],
  summary: {},
  isLoading: false,
  error: null,
  balanceAfter: 0,
};

const extraActions = [
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,

  extraReducers: builder =>
    builder

      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })

      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [payload, ...state.transactions];
        state.balanceAfter = payload;
        //?????
      })

      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== payload
        );
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(
          transaction => (transaction.id !== payload.id ? transaction : payload)
          //????учитівать ли тут balanceAfter
        );
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(summaryTransactions.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

export const transactionsReducer = transactionsSlice.reducer;
