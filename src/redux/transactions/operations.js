import { createAsyncThunk } from '@reduxjs/toolkit';
import { backend } from 'redux/auth/authOperation';

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
      const response = await backend.delete(`/transactions/${transactionId}`);

      return response.data.id;
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

export const summaryTransactions = createAsyncThunk(
  'transactions/summaryTransactions',
  async (_, thunkAPI) => {
    try {
      const response = await backend.get(`/transactions-summary`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
