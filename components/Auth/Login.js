import { Box, Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import styles from '../../public/css/login.module.css';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/auth';

const Login = () => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserId = useCallback((e) => {
    setUserId(e.target.value);
  });

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    const data = { userId, password };
    dispatch(loginAction(data));
  });

  const handleRedirectPage = useCallback((e) => {
    e.preventDefault();
    location.href = '/auth/join';
  });

  return (
    <div className={styles.LoginWrap}>
      <Box component="div" className={styles.LoginBoxWrap}>
        <h2>로그인</h2>
        <hr />
        <div className={styles.TextFieldWrap}>
          <TextField
            required
            id="input-with-icon-textfield"
            label="ID"
            className={styles.TextField}
            value={userId}
            onChange={onChangeUserId}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <TextField
            required
            id="input-with-icon-textfield"
            label="PASSWORD"
            className={styles.TextField}
            type="password"
            value={password}
            onChange={onChangePassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
        <div className={styles.ButtonGroup}>
          <Button variant="contained" onClick={onSubmit}>
            로그인
          </Button>
          <Button variant="contained" onClick={handleRedirectPage}>
            회원가입
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
