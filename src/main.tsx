import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { darkThemeClassName } from '@admiral-ds/web';
import '@admiral-ds/fonts/VTBGroupUI.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App className={darkThemeClassName} />
  </StrictMode>,
);
