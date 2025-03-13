import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg?url';
import './App.css';
import { Button } from '#src/components/Button';
import { FocusBox, inputlineClassName } from '#src/components/Input';
import { textStyle, createBorderRadius } from '@admiral-ds/web';
import { Popover } from 'react-tiny-popover';
import { panelClassName } from './components/Panel';
import { Menu, MenuItem, menuItemClassName } from './components/Menu';
import { Scrollbar } from './components/Scrollbar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { TableBaseHTML } from './components/TableBaseHTML';
import { GroupActionsPane } from './components/GroupActionsPane';
import { Checkbox, PaneMenuProps, PaneSeparator, T, TextButton } from '@admiral-ds/react-ui';

import MoreHorizontalOutline from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg?react';
import ArrowDownOutline from '@admiral-ds/icons/build/system/ArrowDownOutline.svg?react';
import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg?react';
import TelegrammOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';

import { tableWrapper, container, wrapper } from './App.styles.css.ts';

const headerModel = [
  [
    { rowSpan: 2, children: <Checkbox /> },
    { rowSpan: 2, children: <T font="Subtitle/Subtitle 3">Long column name two lines</T> },
    { colSpan: 2, children: <T font="Subtitle/Subtitle 3">Column title</T> },
    { colSpan: 2, children: <T font="Subtitle/Subtitle 3">Column title</T> },
  ],
  [
    {
      children: (
        <div className={wrapper}>
          <T font="Subtitle/Subtitle 3">Column title11</T>
          <MoreHorizontalOutline width={16} />
        </div>
      ),
    },
    { children: <T font="Subtitle/Subtitle 3">Column title</T> },
    {
      children: (
        <div className={wrapper}>
          <div className={container}>
            <T font="Subtitle/Subtitle 3">Column title11</T>
            <ArrowDownOutline width={16} color="#0062FF" />
          </div>
          <MoreHorizontalOutline width={16} />
        </div>
      ),
    },
    { children: <T font="Subtitle/Subtitle 3">Column title</T> },
  ],
] satisfies React.ComponentProps<'th'>[][];

const bodyModel = [
  ...Array(20)
    .fill(1)
    .map((_, rowIndex) =>
      Array(6)
        .fill(1)
        .map((_, colIndex) => {
          if (colIndex + 1 === 1) {
            return { children: <Checkbox /> };
          }
          return { children: `Cell ${rowIndex}_${colIndex + 1}` };
        }),
    ),
] satisfies React.ComponentProps<'td'>[][];

function createBodyModel(): React.ComponentProps<'td'>[][] {
  return bodyModel;
}

export function App(props: ComponentPropsWithoutRef<'div'>) {
  const [count, setCount] = useState(0);
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => <>{console.log(closeMenu)}</>;

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
          <FocusBox
            data-size="xl"
            style={
              {
                ...assignInlineVars(createBorderRadius(0)),
                '--admiral-border-radius-m': '3px',
              } as React.CSSProperties
            }
          >
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
      <div className={tableWrapper}>
        <GroupActionsPane renderSettingsMenu={renderSettingsMenu}>
          <TextButton text={'Action 1'} iconStart={<GovernmentOutline />} />
          <TextButton text={'Action 2'} iconStart={<TelegrammOutline />} />
          <TextButton text={'Action 3'} iconStart={<AlertOutline />} />
          <PaneSeparator />
          <TextButton text={'Action 4'} iconStart={<CardSolid />} />
        </GroupActionsPane>
        <TableBaseHTML
          headerModel={headerModel}
          bodyModel={createBodyModel()}
          style={{ maxHeight: 500, maxWidth: 700 }}
        />
      </div>
      <GroupActionsPane />
    </div>
  );
}
