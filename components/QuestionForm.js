import React, { Component } from 'react';
import { useState } from 'react';
import styles from '../public/css/questionStyle.module.css';

const QuestionForm = (props) => {
  const [input, setInput] = useState({
    question: '',
  });

  const { question } = input;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    props.onCreate(input);
    // 상태 초기화
    setInput({
      question: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="질문" value={question} onChange={handleChange} name="question" />
      <button type="submit">등록</button>
    </form>
  );
};
export default QuestionForm;
