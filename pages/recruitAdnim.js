import React from 'react';
import { useState } from 'react';
import Question from '../components/Question.js';

const recrutiAdnim = () => {
  const [number, setNumber] = useState(1);

  const Addquestion = (e) => {
    setNumber(number + 1);
  };
  const minusquestion = (e) => {
    if (number > 0) {
      setNumber(number - 1);
    } else if (number >= 0) {
      e.preventDefault();
      alert('질문이 0개 이하입니다!');
    }
  };

  return (
    <div>
      <h1>recrutiAdnim</h1>
      <Question />
      <div>{number}</div>

      <div>
        <button onClick={Addquestion}>질문추가</button>
        <button onClick={minusquestion}>질문삭제</button>
      </div>
    </div>
  );
};
export default recrutiAdnim;
