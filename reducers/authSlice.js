import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction, joinAction } from '../actions/auth';

const initialState = {
  userName: '', // 사용자 이름
  isAdmin: false, // 유저 관리자 여부
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false, // 로그인 여부
  loginFailureReason: '', // 로그인 실패 이유
  isLoggingOut: false, // 로그아웃 시도중
  logoutFailureReason: '', // 로그아웃 실패 이유
  isSigningUp: false, // 회원가입 시도중
  isSignedUp: false, // 회원가입 성공 여부
  signUpFailureReason: '', // 회원가입 실패 이유
  authErrorReason: '',
};

// authSlice (reducer+action)
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // join
    [joinAction.pending](state, action) {
      state.isSigningUp = true;
    },
    [joinAction.fulfilled](state, action) {
      const data = action.payload;
      state.isSigningUp = false;
      state.isSignedUp = true;
    },
    [joinAction.rejected](state, action) {
      state.isSigningUp = false;
      state.signUpFailureReason = action.error;
    },

    // login
    [loginAction.pending](state, action) {
      state.isLoggingIn = true;
    },
    [loginAction.fulfilled](state, action) {
      const data = action.payload;
      state.userName = data.user.name;
      state.isLoggingIn = false;
      state.isLoggedIn = true;
      state.isAdmin = data.user.isAdmin;
    },
    [loginAction.rejected](state, action) {
      state.isLoggingIn = false;
      state.loginFailureReason = action.error;
    },

    // logout
    [logoutAction.pending](state, action) {
      state.isLoggingOut = true;
    },
    [logoutAction.fulfilled](state, action) {
      const data = action.payload;
      state.userName = '';
      state.isLoggingOut = false;
      state.isLoggedIn = false;
      state.isAdmin = '';
    },
    [logoutAction.rejected](state, action) {
      state.isLoggingOut = false;
      state.logoutFailureReason = action.error;
    },
  },
});

export default authSlice;
