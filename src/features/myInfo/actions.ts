import { createAction } from '@reduxjs/toolkit';
import { TMyInformation } from '~/types/user/myinfo';

export const agreeChecker = createAction<boolean>('myInfo/agreeChecker');
export const changeMyInfo = createAction<TMyInformation>('myInfo/changeMyInfo');