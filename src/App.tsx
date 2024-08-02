import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg?url';
import './App.css';
import { Button, typography as T } from '@admiral-ds/web';

export function App(props: ComponentPropsWithoutRef<'div'>) {
  const [count, setCount] = useState(0);

  return (
    <div {...props}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span className={T['Header/HL1']}>Крупный шрифт параграфа, может использоваться как подзаголовок</span>
        <br />
        <Button size="large" onClick={() => setCount((count) => count + 1)} primary>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}
