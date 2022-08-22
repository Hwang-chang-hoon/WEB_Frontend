import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction, joinAction, getUserDataAction } from '../actions/auth';

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
    // 회원가입 요청중
    [joinAction.pending](state, action) {
      state.isSigningUp = true;
    },
    // 회원가입 요청 성공
    [joinAction.fulfilled](state, action) {
      const data = action.payload;
      state.isSigningUp = false;
      state.isSignedUp = true;
    },
    // 회원가입 요청 실패
    [joinAction.rejected](state, action) {
      state.isSigningUp = false;
      state.signUpFailureReason = action.error;
    },

    // login 요청중
    [loginAction.pending](state, action) {
      state.isLoggingIn = true;
    },
    // login 요청 성공
    [loginAction.fulfilled](state, action) {
      const data = action.payload;
      state.userName = data.user.name;
      state.isLoggingIn = false;
      state.isLoggedIn = true;
      state.isAdmin = data.user.isAdmin;
    },
    // login 요청 실패
    [loginAction.rejected](state, action) {
      state.isLoggingIn = false;
      state.loginFailureReason = action.error;
    },

    // logout 요청중
    [logoutAction.pending](state, action) {
      state.isLoggingOut = true;
    },
    // logout 요청 성공
    [logoutAction.fulfilled](state, action) {
      const data = action.payload;
      state.userName = '';
      state.isLoggingOut = false;
      state.isLoggedIn = false;
      state.isAdmin = '';
    },
    // logout 요청 실패
    [logoutAction.rejected](state, action) {
      state.isLoggingOut = false;
      state.logoutFailureReason = action.error;
    },

    // userData 가져오기 요청
    [getUserDataAction.pending](state, action) {
      // 받아오는중
    },
    // userData 가져오기 요청 성공
    [getUserDataAction.fulfilled](state, action) {
      if (action.payload) {
        state.nick = action.payload.data.nick;
        state.role = action.payload.data.role;
        state.isLoggedIn = true;
      }
    },
    // userData 가져오기 요청 실패
    [getUserDataAction.rejected](state, action) {
      state.getUserErrorReason = action.error;
    },
  },
});

export default authSlice;
