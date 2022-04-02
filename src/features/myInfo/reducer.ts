import { createReducer } from '@reduxjs/toolkit';
import { TMyInformation } from '~/types/user/myinfo';

import { produce } from 'immer';

import { agreeChecker, changeMyInfo } from './actions';

type TState = {
  isAgree: boolean,
  myInfo: TMyInformation,
};

const initialState: TState = {
  isAgree: false,
  myInfo: {
    age: "",
    gender: "f",
    name: "",
  }
};

export const myInfoReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(agreeChecker, (state) => {
    state.isAgree = true;
  })
  .addCase(changeMyInfo, (state, action) => {
    return produce(state, draft => {
      draft['myInfo'] = action.payload;
    });
  })
})