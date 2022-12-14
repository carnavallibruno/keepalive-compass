import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './components/UI/GlobalStyle'
import Router from '../routes/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
      <Router />
  </React.StrictMode>
);