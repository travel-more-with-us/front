import React from 'react';
import { createRoot } from 'react-dom/client';
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
  errorColor: '#ED2E7E',
  errorbg: '#FFF3F8;',
  success: '#00BA88',
  successBg: '#F2FFFB'
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>
);
