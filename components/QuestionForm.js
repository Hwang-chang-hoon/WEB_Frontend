import React, { Component } from 'react';
import { useState } from 'react';
import styles from '../public/css/questionStyle.module.css';

const QuestionForm = (props) => {
  const [input, setInput] = useState({
    name: '',
    phone: '',
  });

  const { name, phone } = input;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    props.onCreate(input);
    // 상태 초기화
    setInput({
      name: '',
      phone: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="이름" value={name} onChange={handleChange} name="name" />
      // <textarea placeholder="전화번호" value={phone} onChange={handleChange} name="phone" />
      <button type="submit">등록</button>
    </form>
  );
};
export default QuestionForm;
