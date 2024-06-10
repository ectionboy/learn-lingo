import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Teachers from './Pages/Teachers';
import NotFound from './NotFound/NotFound';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/teachers" element={<Layout><Teachers /></Layout>} />
      <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
