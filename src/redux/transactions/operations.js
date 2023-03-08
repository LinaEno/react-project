import { createAsyncThunk } from '@reduxjs/toolkit';
import { backend, fetchCurrentUser } from 'redux/auth/authOperation';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, thunkAPI) => {
    try {
      const response = await backend.get('/transactions');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (data, thunkAPI) => {
    try {
      const response = await backend.post('/transactions', data);
      thunkAPI.dispatch(fetchCurrentUser());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await backend.delete(`/transactions/${transactionId}`);
      thunkAPI.dispatch(fetchCurrentUser());
      return transactionId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const response = await backend.patch(`/transactions/${transactionId}`);
      thunkAPI.dispatch(fetchCurrentUser());
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await backend.get(`/transaction-categories`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const now = new Date();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();

export const summaryTransactions = createAsyncThunk(
  'transactions/summaryTransactions',
  async (date = { month: currentMonth, year: currentYear }, thunkAPI) => {
    try {
      const response = await backend.get(
        `transactions-summary?month=${date.month}&year=${date.year}`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
