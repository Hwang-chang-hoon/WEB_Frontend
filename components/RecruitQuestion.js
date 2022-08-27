//질문 작성 페이지
import { TextField } from '@mui/material';
import { Box, Button } from '@mui/material';
import React, { Component, useCallback } from 'react';
import { useState, useRef } from 'react';
import QuestionForm from '../components/QuestionForm.js';
import QuestionInfo from './QuestionInfo.js';
import styles from '../public/css/questionAdminStyle.module.css';
import { defaultFadeInLeftVariants, defaultFadeInUpVariants } from './motion';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const RecruitQuestion = (props) => {
  RecruitQuestion.defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
  };

  const [input, setInput] = useState({
    question: '',
  });

  const [question, setQuestion] = useState([
    {
      id: 0,
      question: '질문 1',
    },
    {
      id: 1,
      question: '질문 2',
    },
  ]);

  const nextId = useRef(2);

  const handleCreate = (data) => {
    const user = {
      id: nextId.current,
      question: data,
    };
    setQuestion([...question, user]);

    setInput({
      question: '',
    });
    nextId.current += 1;
    console.log(data);
    console.log(question);
  };

  const handleRemove = (id) => {
    console.log(id);
    const result = question.splice(id, 1);
    setQuestion(question);
  };

  return (
    <div className={styles.Wrap}>
      <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={`${styles.recruitName}`}>
        {props.count}기 지원서
      </motion.h2>

      <QuestionForm onCreate={handleCreate} />

      <div>
        {question.map((info) => (
          <QuestionInfo key={info.id} info={info} onRemove={handleRemove} />
        ))}
      </div>

      <motion.div initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={styles.RecruitAnswerSubmitWrap}>
        <Button variant="text" size="large" className={styles.RecruitAnswerSubmit} endIcon={<SendIcon />}>
          제출
        </Button>
      </motion.div>
    </div>
  );
};
export default RecruitQuestion;
