import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURl = '베이스 주소';

// 회원가입
export const joinAction = createAsyncThunk('auth/join', async (data, thunkAPI) => {
  console.log(`${data}회원가입함.`);
  // const result = await axios.post("/exampleaddress"); // 보낼 요청
  result = true;
  return result;
});

// 로그인
export const loginAction = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  console.log(`${data}로 로그인함.`);
  // const result = await axios.post("/exampleaddress"); // 보낼 요청

  // 더미데이터
  const result = {
    user: {
      name: '홍길동',
      age: 45,
      id: data.id,
      isAdmin: true,
    },
  };
  return result;
});

// 로그아웃
export const logoutAction = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  console.log('로그아웃함');
  // const result = await axios.post("/exampleaddress"); // 보낼 요청
  result = true;
  return result;
});
