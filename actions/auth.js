import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { removeCookie } from '../util/cookie';

axios.defaults.baseURL = 'https://localhost:8080';

export const userIdOverlapCheck = createAsyncThunk('auth/overlapcheck', async (data, thunkAPI) => {
  try {
    // api/users/exist/{userId}로 post요청
    let result = await axios({
      method: 'get',
      url: `/api/users/${data}`,
    });
    return result.data; // statusDetail에서 'NO_CONTENT'면 가입불가, 'OK'면 가입가능
  } catch (err) {
    console.error(err);
  }
});

// 회원가입
export const joinAction = createAsyncThunk('auth/join', async (data, thunkAPI) => {
  try {
    // api/users로 post요청
    let result = await axios({
      method: 'post',
      url: '/api/users',
      data,
    });
    return result.data.status; // 성공 시 상태코드만 반환
  } catch (err) {
    console.error(err);
  }
});

// 로그인
export const loginAction = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    // api/auth/login으로 post요청
    let result = await axios({
      method: 'post',
      url: '/api/auth/login',
      data,
    });
    localStorage.setItem('access_token', result.data.access_token); // accessToken localStorage에 저장, refreshToken은 백에서 쿠키로 넣어줌.
    return result.status; // 상태코드 반환
  } catch (err) {
    console.error(err);
  }
});

// 로그아웃
export const logoutAction = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  localStorage.removeItem('access_token'); // accessToken 제거
  removeCookie('refresh_token'); // refreshToken제거
});

// 사용자 정보 요청
export const getUserDataAction = createAsyncThunk('auth/userData', async (data, thunkAPI) => {
  try {
    let result = await axios({
      method: 'get',
      url: '/api/users',
      headers: {
        // withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`, // accessToken만 보내기
      },
    });

    return result; // 결과 그대로 반환
  } catch (err) {
    // api 아직 안만들어짐, 401상태코드 확인해서 refreshToken받아오는 요청 날릴부분
  }
});
