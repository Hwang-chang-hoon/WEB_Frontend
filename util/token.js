import axios from 'axios';
import { getCookie } from './cookie';

export const getRefreshedAccessToken = async () => {
  try {
    let result = await axios({
      method: 'post',
      url: 'auth/getnewtoken',
      headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        'Set-Cookie': `refresh_token={${getCookie('refresh_token')}}`,
      },
    });

    localStorage.setItem('access_token', result.data.access_token);
    return result.status;
  } catch (err) {
    console.error(err);
  }
};
