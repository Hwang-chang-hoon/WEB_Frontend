import React, { Component } from 'react';
import QuestionInfo from './QuestionInfo.js';
import styles from '../public/css/questionAdminList.module.css';

const QuestionInfoList = (props) => {
  QuestionInfoList.defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
  };
  const { data, onRemove } = props;
  return (
    <div className={`${styles.Wrap}`}>
      {props.data.map((info) => (
        <QuestionInfo key={info.id} info={info} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default QuestionInfoList;
