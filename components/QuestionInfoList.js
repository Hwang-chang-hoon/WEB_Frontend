import React, { Component } from 'react';
import QuestionInfo from './QuestionInfo.js';

const QuestionInfoList = (props) => {
  QuestionInfoList.defaultProps = {
    data: [],
  };
  const { data } = props;

  return (
    <div>
      {props.data.map((info) => (
        <QuestionInfo key={info.id} info={info} />
      ))}
    </div>
  );
};

export default QuestionInfoList;
