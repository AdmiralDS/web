import { StrictMode, useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { darkThemeClassName, lightThemeClassName } from '@admiral-ds/web';
import '@admiral-ds/fonts/VTBGroupUI.css';
import { createBorderRadius } from '#lib/createBorderRadius.ts';

const Root = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (mq.matches) {
      setIsDark(true);
    }

    const changeThemeHandler = (ev: MediaQueryListEvent) => setIsDark(ev.matches);
    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener('change', changeThemeHandler);
    return mq.removeEventListener('change', changeThemeHandler);
  }, []);
  return (
    <StrictMode>
      <App
        className={isDark ? darkThemeClassName : lightThemeClassName}
        style={assignInlineVars(createBorderRadius(8))}
      />
    </StrictMode>
  );
};
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<Root />);
}
