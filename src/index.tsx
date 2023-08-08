import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
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
  txtFormColor: '#4E4B66',
  errorColor: '#ED2E7E',
  errorbg: '#FFF3F8',
  success: '#00BA88',
  successBg: '#F2FFFB'
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);






