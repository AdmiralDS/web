import { Checkbox, GroupActionsPane, PaneSeparator, T, TextButton } from '@admiral-ds/react-ui';
import type { PaneMenuProps } from '@admiral-ds/react-ui';
import MoreHorizontalOutline from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg?react';
import ArrowDownOutline from '@admiral-ds/icons/build/system/ArrowDownOutline.svg?react';
import GovernmentOutline from '@admiral-ds/icons/build/category/GovernmentOutline.svg?react';
import TelegrammOutline from '@admiral-ds/icons/build/communication/TelegrammOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import CardSolid from '@admiral-ds/icons/build/finance/CardSolid.svg?react';
import './style.css';

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
        <div className="wrapper">
          <T font="Subtitle/Subtitle 3">Column title11</T>
          <MoreHorizontalOutline width={16} />
        </div>
      ),
    },
    { children: <T font="Subtitle/Subtitle 3">Column title</T> },
    {
      children: (
        <div className="wrapper">
          <div className="container">
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

const renderSettingsMenu = ({ closeMenu }: PaneMenuProps) => <>{console.log(closeMenu)}</>;

export const TableBaseHTML = () => {
  return (
    <div className="tableWrapper">
      <GroupActionsPane renderSettingsMenu={renderSettingsMenu}>
        <TextButton text={'Action 1'} iconStart={<GovernmentOutline />} />
        <TextButton text={'Action 2'} iconStart={<TelegrammOutline />} />
        <TextButton text={'Action 3'} iconStart={<AlertOutline />} />
        <PaneSeparator />
        <TextButton text={'Action 4'} iconStart={<CardSolid />} />
      </GroupActionsPane>
      <table style={{ maxHeight: 500, maxWidth: 980 }} className="tableStyle">
        <tbody>
          {Array(20)
            .fill(1)
            .map((_, rowIndex) => (
              <tr key={`row_${rowIndex}`} className="trStyle">
                {Array(6)
                  .fill(1)
                  .map((_, colIndex) => {
                    if (colIndex + 1 === 1) {
                      return (
                        <td key={`cell_${rowIndex}_${colIndex}`} className="tdStyle">
                          <Checkbox />
                        </td>
                      );
                    }
                    return (
                      <td
                        key={`cell_${rowIndex}_${colIndex}`}
                        className="tdStyle"
                      >{`Cell ${rowIndex}_${colIndex + 1}`}</td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
        <thead className="theadStyle">
          {headerModel.map((row, rowIndex) => (
            <tr key={`row_${rowIndex}`} className="trStyle">
              {row.map((cell, colIndex) => (
                <th key={`thcell_${rowIndex}_${colIndex}`} {...cell} className="thStyle" />
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
