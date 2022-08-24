import React from 'react';
import { Button } from '@mui/material';

const AppLayout = ({ children }) => {
  return (
    <>
      <div className={'Backgroud'}>
        <div className={'HeaderBody'}>
          <div>
            <img src="/images/Logo.png" className="LogoImg" />
          </div>
          <div>
            <Button variant="text" size="small" className="MainBtn">
              <a href="/">Main</a>
            </Button>
            <Button variant="text" size="small" className="RecruitBtn">
              <a href="/recruit/precruit">Recruit</a>
            </Button>
            <Button variant="text" size="small" className="RecruitBtn">
              <a href="/auth/login">Login</a>
            </Button>
          </div>
        </div>
        <div className="MainBody">{children}</div>
        <div className={'FooterBody'}>copyrightⓒ2022. debug. All rights reserved.</div>
      </div>
    </>
  );
};

export default AppLayout;
