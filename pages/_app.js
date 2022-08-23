import React from 'react';
import { Provider } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { store } from '../store.js';
import '../public/css/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};
export default App;
