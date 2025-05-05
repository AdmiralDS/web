import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import { Button } from './components/Button';

export function App(props: ComponentPropsWithoutRef<'div'>) {
  const [, setElement] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={(elem) => setElement(elem)} style={{ height: '100vh', overflow: 'auto' }} {...props}>
      <Dropdown position="left-center" targetElement={<Button>Открыть</Button>}>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
            background: 'white',
            margin: 0,
            border: 'none',
            width: 70,
          }}
        >
          Popover content
        </div>
      </Dropdown>
    </div>
  );
}
