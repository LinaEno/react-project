import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
} from './operations';
import { logIn, fetchCurrentUser } from 'redux/auth/authOperation';

const initialState = {
  categories: [],
  transactions: [],
  summary: {},
  balance: 0,
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
        state.balance = payload.balanceAfter;
        //?????
      })

      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== payload
        );
        state.balance = payload.balanceAfter;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(transaction =>
          transaction.id !== payload.id ? transaction : payload
        );
        state.balance = payload.balanceAfter;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(summaryTransactions.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;
