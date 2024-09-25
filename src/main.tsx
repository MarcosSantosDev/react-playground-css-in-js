import React from 'react';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { enableMocking } from './mocks/browser';
import { Router } from './router';
import { AppThemeProvider } from './styles/AppThemeProvider';

const helmetContext = {};

const container = document.getElementById('root') as HTMLElement;

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(container);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <AppThemeProvider>
          <Router />
        </AppThemeProvider>
      </HelmetProvider>
    </React.StrictMode>,
  );
});
