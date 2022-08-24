import React from 'react';
import styles from '../public/css/prerecruit.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInUpVariants, defaultFadeInLeftVariants } from './motion';
import { Button, Box } from '@mui/material';

const PreRecruit = () => {
  return (
    <div className={styles.Wrap}>
      <Box className={styles.TextContent}>
        <motion.h1 initial="initial" whileInView="animate" variants={defaultFadeInUpVariants}>
          Debug
        </motion.h1>
        <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
          Debug는 교내 유일한 <span className={styles.highlight}>정보 보안 동아리</span>입니다.
        </motion.h2>
        <motion.h3 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
          튼튼한 간과 폐를 가진 자, 그것이 우리의 인재상
        </motion.h3>
        <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={styles.TextTitle}>
          노력은 무한히, 하지만 인생은 한방
        </motion.h2>
      </Box>
      <div className={styles.Bottom}>
        <motion.span initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}></motion.span>
        <motion.h3 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
          디버그와 함께할 <span className={styles.highlight}>인재</span>의 지원을 기다립니다.
        </motion.h3>
        <Button variant="outlined">
          <a href="/recruit/guestrecruit">지원모집 확인</a>
        </Button>
      </div>
    </div>
  );
};

export default PreRecruit;
