import {
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import AuthReducer from './slices/AuthSlice';
import { initialState as AuthInitState } from './slices/AuthSlice';
import ReducerMappers from './constants/reducerMapper';

const createReducer = () => {
  return combineReducers({
    [ReducerMappers.AUTH]: AuthReducer,
  });
};

const combinedReducer = createReducer();

const mainReducer = (state: any, action: Action) => {
  //it would be redundant if i use it in slices
  if (action.type === HYDRATE) {
    return {
      ...state,

      //as i removed the beneath code so it won't merge server side states to client
      //...action.payload
    };
  } else {
    return combinedReducer(state, action);
  }
};

const defaultInitState = {
  [ReducerMappers.AUTH]: AuthInitState,
};

export const makeStore = () => {
  return configureStore({
    reducer: mainReducer,
    preloadedState: defaultInitState,
  });
};

type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof combinedReducer>;

export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppDispatch = ThunkDispatch<RootState, any, Action>;

export const storeWrapper = createWrapper<AppStore>(makeStore);
