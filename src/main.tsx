import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import { injectSpeedInsights } from '@vercel/speed-insights';
import App from './App';
import { RouterProvider } from './system/router';
import './styles/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/home.css';
import './styles/inner.css';
import './styles/footer.css';
import './styles/prototype.css';

injectSpeedInsights();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <App />
      </RouterProvider>
    </MotionConfig>
  </React.StrictMode>,
);
