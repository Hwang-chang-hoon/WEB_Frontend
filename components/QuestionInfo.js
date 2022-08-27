import React, { Component } from 'react';
import styles from '../public/css/questionAdminList.module.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const QuestionInfo = (props) => {
  QuestionInfo.defaultProps = {
    info: {
      id: 0,
      question: '질문',
    },
  };

  const handleRemove = () => {
    console.log(id);
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = props;
    onRemove(info.id);
  };

  const { question, id } = props.info;

  return (
    <div className={styles.Wrap}>
      <div className={styles.Questionbox}>
        <div className={styles.textBox}>{question}</div>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} className={styles.deletbutton} onClick={handleRemove}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default QuestionInfo;
