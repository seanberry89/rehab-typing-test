import { Fragment, lazy, Suspense } from "react";
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/pages/Loading';

const Home = lazy(() => import('./components/pages/Home'));
const Select = lazy(() => import('./components/pages/Select'));
const Test = lazy(() => import('./components/pages/Test'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Suspense fallback={ <Loader /> }>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="select" element={ <Select /> } />
          <Route exact path="test" element={ <Test /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
