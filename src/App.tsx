import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg?url';
import './App.css';
// import { Button } from '#src/components/Button';
// import { FocusBox, inputlineClassName } from '#src/components/Input';
// import { textStyle, createBorderRadius } from '@admiral-ds/web';
// import { Popover } from 'react-tiny-popover';
// import { panelClassName } from './components/Panel';
// import { Menu, MenuItem, menuItemClassName } from './components/Menu';
// import { Scrollbar } from './components/Scrollbar';
// import { assignInlineVars } from '@vanilla-extract/dynamic';
import { TableBaseHTML } from './components/TableBaseHTML';
import { Checkbox, GroupActionsPane, PaneMenuProps, PaneSeparator, T, TextButton } from '@admiral-ds/react-ui';

import MoreHorizontalOutline from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg?react';
import ArrowDownOutline from '@admiral-ds/icons/build/system/ArrowDownOutline.svg?react';
import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg?react';
import TelegrammOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';

import { container, wrapper } from './App.styles.css.ts';

const headerModel = [
  [
    { rowSpan: 2, children: <Checkbox />, className: 'fixed' },
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
            return { children: <Checkbox />, className: 'fixed' };
          }
          return { children: `Cell ${rowIndex}_${colIndex + 1}` };
        }),
    ),
] satisfies React.ComponentProps<'td'>[][];

function createBodyModel(): React.ComponentProps<'td'>[][] {
  return bodyModel;
}

export function App(props: ComponentPropsWithoutRef<'div'>) {
  const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => <>{console.log(closeMenu)}</>;

  return (
    <div {...props}>
      <GroupActionsPane renderSettingsMenu={renderSettingsMenu}>
        <TextButton text={'Action 1'} iconStart={<GovernmentOutline />} />
        <TextButton text={'Action 2'} iconStart={<TelegrammOutline />} />
        <TextButton text={'Action 3'} iconStart={<AlertOutline />} />
        <PaneSeparator />
        <TextButton text={'Action 4'} iconStart={<CardSolid />} />
      </GroupActionsPane>
      <TableBaseHTML headerModel={headerModel} bodyModel={createBodyModel()} style={{ maxHeight: 500 }} />
    </div>
  );
}
