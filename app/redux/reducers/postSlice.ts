import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {postApi} from '../../api/postApi';
import axios from 'axios';
import {act} from 'react-test-renderer';

export interface PostState {
  postList: any[];
  loading: boolean;
}

const initialState: PostState = {
  postList: [],
  loading: false,
};

export const getPostList = createAsyncThunk('post/getPostList', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPostList.pending, state => {
      state.loading = true;
    });
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default postSlice;
