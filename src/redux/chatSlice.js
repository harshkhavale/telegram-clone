import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatList = createAsyncThunk('chat/fetchChatList', async () => {
  const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1'); 
  return response.data.data;
});

export const fetchChatDetails = createAsyncThunk('chat/fetchChatDetails', async (chatId) => {
  const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`); 
  return response.data.data;
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChatList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('API Response:', action.payload); // Log the response to inspect it
        state.chatList = Array.isArray(action.payload) ? action.payload : action.payload.data || [];
      })
      .addCase(fetchChatList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;
