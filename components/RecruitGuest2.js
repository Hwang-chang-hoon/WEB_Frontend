//신청 페이지
import { Box, Button } from '@mui/material';
import React from 'react';
import styles from '../public/css/recruitguest2.module.css';
import RecruitAnswer from './RecruitAnswer';
import { motion } from 'framer-motion';
import { defaultFadeInLeftVariants, defaultFadeInUpVariants } from './motion';
import SendIcon from '@mui/icons-material/Send';

const RecruitGuest2 = (props) => {
  const dummyData = [
    { id: 1, title: '학번을 입력해주세요' },
    { id: 2, title: '이름을 입력해주세요' },
    { id: 3, title: '지원하게 된 계기를 입력해주세요' },
  ];
  return (
    <div className={`${styles.Wrap}`}>
      <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={`${styles.recruitName}`}>
        {props.count}기 지원서
      </motion.h2>
      <Box component="div" pt={5}>
        <motion.div initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={`${styles.AnswerWrap}`}>
          {dummyData.map((dummy) => (
            <RecruitAnswer id={dummy.id} title={dummy.title} />
          ))}
        </motion.div>
      </Box>
      <motion.div initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={`${styles.RecruitAnswerSubmitWrap}`}>
        <Button variant="text" size="large" className={styles.RecruitAnswerSubmit} endIcon={<SendIcon />}>
          제출
        </Button>
      </motion.div>
    </div>
  );
};

export default RecruitGuest2;
