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
  // 토큰 데이터(예시)
  const dummy = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrIjoi7Jqw7LCsIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjYwNjU5NDA2LCJleHAiOjE2NjA2NjMwMDZ9.obJgyi1Sjtk37JDtG51vo__3aFxiHkL3daFJVFfrKIg',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjA2NTk0MDYsImV4cCI6MTY2MTg2OTAwNn0.O27g0FMxDOHcd8xYGzpQyyG1lXXpi6ZDtZ9yBCnxrkc',
  };

  await localStorage.setItem('accessToken', dummy.accessToken);
  await localStorage.setItem('refreshToken', dummy.refreshToken);
  // 실제 요청
  // axios
  //   .post(
  //     '/auth/login',
  //     {
  //       email: data.email,
  //       password: data.password,
  //     },
  //     {
  //       withCredentials: true, // 이거 있어야 서로 쿠키 주고받기 가능
  //     },
  //   )
  //   .then((res) => {
  //     result = res;
  //     // localStorage.setItem('accessToken', res.data.data.accessToken); // 실제 응답 더미데이터로 대체
  //     // localStorage.setItem('refreshToken', res.data.data.refreshToken);
  //     axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken; // axios동작 시 헤더에 기본으로 붙도록
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
});

// 로그아웃
export const logoutAction = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  console.log('로그아웃함');
  // localStorage.removeItem('accessToken');
  // localStorage.removeItem('refreshToken'); // 토큰 제거
});

export const getUserDataAction = createAsyncThunk('auth/userData', async (data, thunkAPI) => {
  // let result = await axios({ // 사용자 정보 요청 (계속보낼거임)
  //   method: 'get',
  //   url: '/getuser',
  //   headers: {
  //     withCredentials: true,
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  //   },
  // });

  let result = {
    nick: '우찬',
    role: 'admin',
  };
  return result;
});
