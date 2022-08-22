import React, { Component } from 'react';

const QuestionInfo = (props) => {
  QuestionInfo.defaultProps = {
    info: {
      question: '질문',
      id: 0,
    },
  };
  const handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = props;
    onRemove(info.id);
  };

  const style = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
    color: 'white',
  };

  const { question, id } = props.info;

  return (
    <div style={style}>
      <div>{id}</div>
      <div>
        <b>{question}</b>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};

export default QuestionInfo;
