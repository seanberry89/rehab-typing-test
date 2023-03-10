import { Fragment, lazy, Suspense } from "react";
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Loader from './components/Loading';

const Home = lazy(() => import('./components/Home'));
const Select = lazy(() => import('./components/Select'));
const Test = lazy(() => import('./components/Test'));
const NotFound = lazy(() => import('./components/NotFound'));

// import Reader from './components/Reader';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Suspense fallback={ <Loader /> }>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/select" element={ <Select /> } />
          <Route exact path="/test" element={ <Test /> } />
          <Route path="*" element={ <NotFound /> } />
          {/* <Route path="/one-minute-test" element={ <Typer /> } />
          <Route path="/three-minute-test" element={ <Typer /> } />
          <Route path="/five-minute-test" element={ <Typer /> } /> */}
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
