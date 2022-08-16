import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../public/css/login.module.css';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={`${styles.LoginWrap}`}>
      <Box component="div" sx={{ p: 3, width: 500, height: 500 }} className={`${styles.LoginBoxWrap}`}>
        <h2>로그인</h2>
        <hr />
        <div className={`${styles.TextFieldWrap}`}>
          <div className={`${styles.TextField}`}>
            <TextField
              required
              id="input-with-icon-textfield"
              label="ID"
              sx={{ width: '15em' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div className={`${styles.TextField}`}>
            <TextField
              required
              id="input-with-icon-textfield"
              label="PASSWORD"
              sx={{ width: '15em' }}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
        </div>
        <div className={`${styles.ButtonGroup}`}>
          <Button variant="contained" sx={{ mr: 5, width: '10em' }}>
            로그인
          </Button>
          <Button variant="contained" sx={{ width: '10em' }}>
            회원가입
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
