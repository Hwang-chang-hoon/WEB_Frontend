import React from 'react';
import { motion } from 'framer-motion';
import styles from '../public/css/main.module.css';
import { defaultFadeInUpVariants, defaultRotate } from './motion';
import { Button, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Main = () => {
  const arr = [`${styles.NameDebug}`, `${styles.line}`, `${styles.typing}`];
  return (
    <div className={`${styles.Wrap}`}>
      <div className={`${styles.MainWrap}`}>
        <h1 className={arr.join(' ')}>
          <span className={`${styles.MainDefine}`}> #define </span> <span className={`${styles.MainDebug}`}>DEBUG -1</span>
        </h1>
        <motion.img initial="inital" whileInView="animate" variants={defaultRotate} src="/images/Logo.png" className={`${styles.MainWrap}`} />
        <div className={`${styles.MainButtonWrap}`}>
          <motion.p initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={`${styles.MainMotion}`}>
            <Button variant="outlined" className={`${styles.MainButton}`}>
              <InstagramIcon fontSize="large" />
            </Button>
          </motion.p>
          <motion.p initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={`${styles.MainMotion}`}>
            <Button variant="outlined" className={`${styles.MainButton}`}>
              <a target="_blank" href="https://github.com/debug-2357/WEB_Frontend">
                <GitHubIcon fontSize="large" />
              </a>
            </Button>
          </motion.p>
          <motion.p initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={`${styles.MainMotion}`}>
            <Button variant="outlined" className={`${styles.MainButton}`}>
              <TravelExploreIcon fontSize="large" />
            </Button>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Main;
