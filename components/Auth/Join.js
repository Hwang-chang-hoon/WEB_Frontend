import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../public/css/join.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { joinAction, userIdOverlapCheck } from '../../actions/auth';

const Join = () => {
  const dispatch = useDispatch();
  const { isOverlapped, overlapButtonClicked } = useSelector((state) => state.auth);

  const [username, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(true);

  const onChangeUserName = useCallback((e) => {
    setUserName(e.target.value);
  });

  const onChangeUserId = useCallback((e) => {
    setUserId(e.target.value);
  });

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  });
  const onChangePassword = useCallback((e) => {
    setPasswordError(e.target.value !== passwordCheck);
    setPassword(e.target.value);
  });

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(password !== e.target.value);
    setPasswordCheck(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const data = {
      userId,
      username,
      email,
      password1: password,
      password2: passwordCheck,
    };
    dispatch(joinAction(data));
  });

  const handleOverlapCheck = useCallback((e) => {
    e.preventDefault();
    dispatch(userIdOverlapCheck(userId));
  });

  return (
    <div className={styles.SingWrap}>
      <Box component="div" className={styles.SingUpBoxWrap}>
        <h2>회원가입</h2>
        <hr className={styles.hr} />
        <TextField required id="input-with-icon-textfield" className={styles.TextField} label="이름" variant="standard" value={username} onChange={onChangeUserName} />
        <div className={styles.ButtonAndText}>
          <TextField required id="input-with-icon-textfield" type="text" label="email" variant="standard" value={userId} onChange={onChangeUserId} />
          <Button variant="outlined" onClick={handleOverlapCheck}>
            ID 중복체크
          </Button>
        </div>

        {isOverlapped === undefined && !overlapButtonClicked ? <div>id중복체크를 해주세요.</div> : isOverlapped === true ? <div>이미 존재하는 아이디입니다.</div> : ''}
        <TextField required id="input-with-icon-textfield" className={styles.TextField} label="email" variant="standard" value={email} onChange={onChangeEmail} />
        <TextField required id="input-with-icon-textfield" className={styles.TextField} label="비밀번호" type="password" value={password} onChange={onChangePassword} variant="standard" />
        <TextField required id="input-with-icon-textfield" className={styles.TextField} label="비밀번호 확인" type="password" value={passwordCheck} onChange={onChangePasswordCheck} variant="standard" />
        {passwordError && password !== '' ? <div>비밀번호와 비밀번호 확인이 다릅니다.</div> : ''}
        <Button variant="outlined" className={styles.ButtonWrap} disabled={passwordError && isOverlapped === undefined} onClick={onSubmit}>
          회원가입
        </Button>
      </Box>
    </div>
  );
};

export default Join;
