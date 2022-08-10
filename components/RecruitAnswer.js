import { TextField } from '@mui/material';
import React from 'react';
import styles from '../public/css/recruitanswer.module.css';

const RecruitAnswer = (props) => {
  return (
    <div className={`${styles.Wrap}`}>
      <fieldset className={`${styles.AnswerField}`}>
        <div className={`${styles.questionname}`}>
          Q{props.id}. {props.title}
        </div>
        <TextField id="filled-full-width" label={`${props.title}`} fullWidth variant="filled" style={{ margin: 8 }} className={`${styles.textfield}`} multiline maxRows={4} />
      </fieldset>
    </div>
  );
};

export default RecruitAnswer;
