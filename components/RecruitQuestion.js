//질문 작성 페이지
import React, { Component } from 'react';
import { useState } from 'react';
import QuestionForm from '../components/QuestionForm.js';
import QuestionInfoList from '../components/QuestionInfoList';
const RecruitQuestion = (props) => {
  let id = 2;
  const state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000',
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001',
      },
    ],
  };

  const handleCreate = (data) => {
    const { information } = state;
    information.concat({ id: id++, ...data });
    console.log(data);
    console.log(id);
  };
  return (
    <div>
      <QuestionForm onCreate={handleCreate} />
      <QuestionInfoList data={state.information} />
    </div>
  );
};
export default RecruitQuestion;
