import { Route, Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { GlobalContextProvider } from './contexts/GlobalContextProvider/ContextWrapper';

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Navigation />} path='/' />
          <Route element={<Navigation />} path='/:page' />
        </Routes>
      </GlobalContextProvider>
    </>
  );
};

export default App;
