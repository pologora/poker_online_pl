import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import start from './helpers/setAppOptions';

start();
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navigation />} path='/' />
        <Route element={<Navigation />} path='/:page' />
      </Routes>
    </>
  );
};

export default App;
