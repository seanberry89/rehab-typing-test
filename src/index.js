import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import AppTheme from './theme/AppTheme';
import RehabState from './context/RehabState';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(

  <StrictMode>
    <Router>
        <AppTheme>
          <RehabState>
              <App />
          </RehabState>
        </AppTheme>
    </Router>
  </StrictMode>

);
