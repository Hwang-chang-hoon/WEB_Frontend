import React, { useState } from 'react';
import styles from '../../public/css/singup.module.css';
import { Box, Button, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SingUp = () => {
  const [values, setValues] = useState({
    password: '',
    passwordCheck: '',
    showPassword: false,
    samePassword: false,
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

  const handleComparePassword = () => {
    if (values.password !== '' && values.passwordCheck !== '') {
      setValues({
        ...values,
        samePassword: values.password === values.passwordCheck ? true : false,
      });
    }
  };

  return (
    <div className={`${styles.SingWrap}`}>
      <Box component="div" sx={{ p: 3, width: 500, height: 600 }} className={`${styles.SingUpBoxWrap}`}>
        <h2>회원가입</h2>
        <hr />
        <div className={`${styles.TextField}`}>
          <TextField required id="input-with-icon-textfield" label="학번" sx={{ width: '18em' }} variant="standard" />
        </div>
        <div className={`${styles.TextField}`}>
          <TextField required id="input-with-icon-textfield" label="아이디" sx={{ width: '18em' }} variant="standard" />
        </div>
        <div className={`${styles.TextField}`}>
          <TextField required id="input-with-icon-textfield" label="비밀번호" sx={{ width: '18em' }} type="password" value={values.password} onChange={handleChange('password')} variant="standard" />
        </div>
        <div className={`${styles.TextField}`}>
          <TextField required id="input-with-icon-textfield" label="비밀번호 확인" sx={{ width: '18em' }} type="password" value={values.passwordCheck} onChange={handleChange('passwordCheck')} variant="standard" />
        </div>
        <p className={`${styles.Explane}`}>비밀번호가 같을 경우 회원가입 버튼이 활성화 됩니다.</p>
        <div className={`${styles.ButtonWrap}`}>
          <Button variant="outlined" onClick={handleComparePassword} sx={{ width: 300 }}>
            비밀번호 확인
          </Button>
        </div>
        <div className={`${styles.ButtonWrap}`}>
          <Button variant="outlined" disabled={!values.samePassword} sx={{ width: 300 }}>
            회원가입
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default SingUp;
