import React from 'react';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { Router } from './router';
import { AppThemeProvider } from './styles/AppThemeProvider';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <AppThemeProvider>
        <Router />
      </AppThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
