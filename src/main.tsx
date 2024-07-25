import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { lightTheme } from '@admiral-ds/web';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App className={lightTheme} />
  </StrictMode>,
);
