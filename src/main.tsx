import React from 'react';

import ReactDOM from 'react-dom/client';

import { Router } from './router';
import { AppThemeProvider } from './styles/AppThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  </React.StrictMode>,
);
