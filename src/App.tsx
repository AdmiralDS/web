import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg?url';
import './App.css';
import {
  Button,
  textStyle,
  FocusBox,
  inputlineClassName,
  panelClassName,
  Menu,
  MenuItem,
  menuItemClassName,
  Scrollbar,
} from '@admiral-ds/web';
import { Popover } from 'react-tiny-popover';

export function App(props: ComponentPropsWithoutRef<'div'>) {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div ref={(elem) => setElement(elem)} style={{ height: '100vh', overflow: 'auto' }} {...props}>
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
        <Popover
          isOpen={isPopoverOpen}
          padding={8}
          parentElement={element ?? undefined}
          containerClassName={panelClassName}
          content={
            <Menu data-size="s">
              <Scrollbar style={{ maxHeight: 100 }}>
                <MenuItem>Default</MenuItem>
                <MenuItem aria-disabled>Default</MenuItem>
                <MenuItem>Default</MenuItem>
                <MenuItem>Default</MenuItem>
                <MenuItem aria-disabled>Default Default Default</MenuItem>
                <MenuItem>Default</MenuItem>
                <MenuItem>Default</MenuItem>
                <MenuItem aria-disabled>Default</MenuItem>
                <MenuItem>Default</MenuItem>
              </Scrollbar>
            </Menu>
          }
          positions={['bottom', 'top']} // preferred positions by priority
          align="end"
        >
          <FocusBox data-size="s">
            <input
              className={inputlineClassName}
              onFocus={() => {
                setIsPopoverOpen(true);
              }}
              onBlur={() => {
                setIsPopoverOpen(true);
              }}
            />
          </FocusBox>
        </Popover>
        <br />
        <br />
        <FocusBox data-size="m">
          <input className={inputlineClassName} />
        </FocusBox>
        <FocusBox data-size="xl">
          <input className={inputlineClassName} />
        </FocusBox>
        <br />
        <div className={panelClassName}>
          <Menu data-size="l">
            <MenuItem>Default</MenuItem>
            <MenuItem aria-disabled>Default</MenuItem>
            <MenuItem>Default</MenuItem>
          </Menu>
        </div>
        <br />
        <div className={panelClassName}>
          <Menu>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
          </Menu>
        </div>
        <br />
        <div className={panelClassName}>
          <Menu data-size="s">
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
            <li className={menuItemClassName}>Default</li>
          </Menu>
        </div>
        <span className={textStyle['Subtitle/Subtitle 2']}>
          Крупный шрифт параграфа, может использоваться как подзаголовок
        </span>

        <br />
        <Button
          size="large"
          onClick={() => {
            setCount((count) => count + 1);
          }}
          primary
        >
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
