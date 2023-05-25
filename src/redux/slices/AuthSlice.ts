import { createSlice } from '@reduxjs/toolkit';
import ReducerMappers from '../constants/reducerMapper';

export const initialState = {
  user: {
    UserId: undefined,
    Name: undefined,
    FirstName: undefined,
    LastName: undefined,
    Phone: undefined,
    Email: undefined,
  },
};

const AuthSlice = createSlice({
  name: ReducerMappers.AUTH,
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;

      state.user.UserId = payload?.UserId;
      state.user.Email = payload?.Email;
      state.user.FirstName = payload?.FirstName;
      state.user.LastName = payload?.LastName;
      state.user.Phone = payload?.Phone;
      state.user.Name = payload?.Name;
    },
  },
});

const AuthReducer = AuthSlice.reducer;

export default AuthReducer;
export const { setUser } = AuthSlice.actions;
