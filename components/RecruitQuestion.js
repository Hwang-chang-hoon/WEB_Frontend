//질문 작성 페이지
import { Box, Button } from '@mui/material';
import React, { Component } from 'react';
import { useState, useRef } from 'react';
import QuestionForm from '../components/QuestionForm.js';
import QuestionInfoList from '../components/QuestionInfoList';
import styles from '../public/css/questionStyle.module.css';
import { defaultFadeInLeftVariants, defaultFadeInUpVariants } from './motion';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const RecruitQuestion = (props) => {
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
    setQuestion(question.filter((info) => info.id !== id));
  };
  return (
    <div className={`${styles.Wrap}`}>
      <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={`${styles.recruitName}`}>
        {props.count}기 지원서
      </motion.h2>
      <QuestionForm onCreate={handleCreate} />
      <QuestionInfoList data={question} onRemove={handleRemove} />
      <motion.div initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={`${styles.RecruitAnswerSubmitWrap}`}>
        <Button variant="text" size="large" className={`${styles.RecruitAnswerSubmit}`} endIcon={<SendIcon />}>
          제출
        </Button>
      </motion.div>
    </div>
  );
};
export default RecruitQuestion;
