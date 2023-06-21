import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const theme = {
  primaryColor: '#29E3AB',
  hoverColor: '#B4FDD3',
  focusedColor: '#0E966D',
  disabledColor: '#D9DBE9',
  txtColor: '#14142A',
  txtColorSecondary: '#6E7191',
  placeholderColor: '#A0A3BD',
  focusVisibleColor: '#6E7191',
  txtFormColor: '#4E4B66',
};

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
