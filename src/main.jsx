import React from 'react';
import { Routes } from './routes';
import theme from './style/theme';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/global';
import {AuthProvider} from './hooks/auth';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode > 
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
