import React, { Component } from 'react';
import { useState } from 'react';
import styles from '../public/css/questionStyle.module.css';

const Question = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(value.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea className={`${styles.question}`} id="textarea" type="text" onChange={onChange} placeholder="질문을 작성해주세요" />
        <button type="submit">질문등록 </button>
      </form>
    </div>
  );
};
export default Question;
