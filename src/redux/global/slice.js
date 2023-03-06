import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
} from 'redux/transactions/operations';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
} from 'redux/auth/authOperation';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  error: null,
};

const extraActions = [
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  fetchCategories,
  summaryTransactions,
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
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

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const {
  openModalAddTransaction,
  openModalLogout,
  closeModalAddTransaction,
  closeModalLogout,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
