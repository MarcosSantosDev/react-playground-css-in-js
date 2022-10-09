import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '@/pages';

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
