import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction, joinAction, getUserDataAction, userIdOverlapCheck } from '../actions/auth';

const initialState = {
  overlapButtonClicked: false,
  isOverlapped: undefined,
  overlapCheckFailureReason: '',
  userId: '', // 사용자 아이디
  username: '', // 사용자 이름
  email: '', // 사용자 이메일
  profileImageUrl: '', // 사용자 프로필 사진
  role: '', // 사용자 역할
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false, // 로그인 여부
  loginFailureReason: '', // 로그인 실패 이유
  isLoggingOut: false, // 로그아웃 시도중
  logoutFailureReason: '', // 로그아웃 실패 이유
  isSigningUp: false, // 회원가입 시도중
  isSignedUp: false, // 회원가입 성공 여부
  signUpFailureReason: '', // 회원가입 실패 이유
};

// authSlice (reducer+action)
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // ID중복체크 요청중
    [userIdOverlapCheck.pending](state, action) {
      state.overlapButtonClicked = true;
    },
    [userIdOverlapCheck.fulfilled](state, action) {
      if (action.payload.data === 'NO_CONTENT') {
        state.isOverlapped = true;
      } else if (action.payload.data === 'OK') {
        state.isOverlapped = false;
      }
    },
    [userIdOverlapCheck.rejected](state, action) {
      state.overlapCheckFailureReason = action.error;
    },

    // 회원가입 요청중
    [joinAction.pending](state, action) {
      state.isSigningUp = true;
    },
    // 회원가입 요청 성공
    [joinAction.fulfilled](state, action) {
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
      state.isLoggingIn = false;
      state.isLoggedIn = true;
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
      state.userId = '';
      state.username = '';
      state.email = '';
      state.profileImageUrl = '';
      state.role = '';
      state.isLoggingOut = false;
      state.isLoggedIn = false;
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
      // 데이터가 있는 경우만.
      if (action.payload) {
        state.userId = action.payload.data.userId; // 사용자 아이디
        state.username = action.payload.data.username; // 사용자 이름
        state.email = action.payload.data.email; // 사용자 이메일
        state.profileImageUrl = action.payload.data.profileImageUrl; // 사용자 프로필이미지
        state.role = action.payload.data.role; // 사용자 역할
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
