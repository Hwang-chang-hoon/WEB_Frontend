import React, { Component } from 'react';

const QuestionInfo = (props) => {
  QuestionInfo.defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0,
    },
  };

  const style = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
    color: 'white',
  };

  const { name, phone, id } = props.info;

  return (
    <div style={style}>
      <div>{id}</div>
      <div>
        <b>{name}</b>
      </div>
      <div>{phone}</div>
    </div>
  );
};

export default QuestionInfo;
