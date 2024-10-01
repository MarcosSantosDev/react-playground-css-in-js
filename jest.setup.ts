Object.defineProperty(process, 'env', {
  value: {
    VITE_APP_TITLE: 'Playground (test)',
    VITE_API_URL: 'http://localhost:3000/api',
    VITE_APP_PORT: '3000',
    VITE_MSW_ACTIVATED: 'true',
    VITE_MSW_DELAY_MS: '2000',
  },
});

export {};
