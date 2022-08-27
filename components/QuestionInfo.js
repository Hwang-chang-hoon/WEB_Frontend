import React, { Component } from 'react';
import styles from '../public/css/questionAdminInput.module.css';

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
      <div>{id}</div>
      <div>
        <b>{question}</b>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};

export default QuestionInfo;
