import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const backend = axios.create({ baseURL: 'https://wallet.goit.ua/api' });

const token = {
  set(token) {
    backend.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    backend.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await backend.post('/auth/sign-up', credentials);

      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await backend.post('/auth/sign-in', {
        name,
        email,
        password,
      });
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.message,
        toast.error('Oops. Something went wrong 😭')
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await backend.delete(`/auth/sign-out`);
    token.unset();
  } catch (e) {
    return thunkAPI.rejectWithValue(
      e.message,
      toast.error('Oops. Something went wrong 😭')
    );
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await backend.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message, toast.error(null));
    }
  }
);
