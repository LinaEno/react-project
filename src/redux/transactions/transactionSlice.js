import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
} from './operations';

const initialState = {
  categories: [],
  transactions: [],
  page: 0,
  perPage: 8,
  categoriesSummary: [],
  expenseSummary: 0,
  incomeSummary: 0,
  periodTotal: 0,
  filteredValue: {
    transactionDate: '',
    amount: '',
    type: '',
    comment: '',
    categoryId: '',
  },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    filteredValue(state, { payload }) {
      state.filteredValue = { ...state.filteredValue, ...payload };
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [payload, ...state.transactions];
      })

      .addCase(summaryTransactions.fulfilled, (state, { payload }) => {
        state.categoriesSummary = payload.categoriesSummary;
        state.expenseSummary = payload.expenseSummary;
        state.incomeSummary = payload.incomeSummary;
        state.periodTotal = payload.periodTotal;
      })

      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(transaction =>
          transaction.id !== payload.id ? transaction : payload
        );
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;

export const { setPage, filteredValue } = transactionsSlice.actions;
