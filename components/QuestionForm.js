import React, { useCallback } from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from '../public/css/questionAdminInput.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInUpVariants } from './motion';
import SendIcon from '@mui/icons-material/Send';

const QuestionForm = (props) => {
  const [question, setQuestion] = useState('');

  const handleQuestion = useCallback((e) => {
    setQuestion(e.target.value);
  });

  const handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    props.onCreate(question);
    // 상태 초기화
    setQuestion('');
  };

  return (
    <div className={styles.Wrap}>
      <form onSubmit={handleSubmit}>
        <fieldset className={`${styles.AnswerField}`}>
          <TextField id="filled-full-width" label={'질문을 등록해주세요.'} fullWidth variant="filled" className={styles.textfield} multiline maxRows={4} value={question} onChange={handleQuestion} name="question" />
          <motion.div initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={styles.RecruitAnswerSubmitWrap}>
            <Button type="submit" variant="text" size="large" className={styles.RecruitAnswerSubmit} endIcon={<SendIcon />}>
              등록
            </Button>
          </motion.div>
        </fieldset>
      </form>
    </div>
  );
};
export default QuestionForm;
