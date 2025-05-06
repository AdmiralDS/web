import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import { Button } from './components/Button';

export function App({ style, ...props }: ComponentPropsWithoutRef<'div'>) {
  const [htmlelement, setElement] = useState<HTMLElement | null>(null);
  const [isDropOpen, setDropOpen] = useState<boolean>(false);
  return (
    <div style={{ ...style, ...{ height: '100vh', overflow: 'auto' } }} {...props}>
      <Button innerRef={(elem) => setElement(elem)} onClick={() => setDropOpen((isDropOpen) => !isDropOpen)}>
        Открыть
      </Button>

      {!isDropOpen ? null : (
        <Dropdown data-testid="my-drop" targetElement={htmlelement} onClickOutside={() => setDropOpen(false)}>
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
      )}
    </div>
  );
}
