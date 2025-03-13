import { tableStyle, theadStyle, thStyle, tdStyle, trStyle, optionsStyle } from './styles.css.ts';
import MoreVerticalOutline from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg?react';

type TableBaseProps = {
  headerModel: React.ComponentProps<'th'>[][];
  bodyModel: React.ComponentProps<'td'>[][];
} & React.ComponentProps<'table'>;

export const TableBaseHTML = ({ headerModel, bodyModel, ...props }: TableBaseProps) => {
  return (
    <table className={tableStyle} {...props}>
      <tbody>
        {bodyModel.map((row, rowIndex) => (
          <tr key={`row_${rowIndex}`} className={trStyle}>
            {row.map((cell, colIndex) => {
              return <td key={`cell_${rowIndex}_${colIndex}`} {...cell} className={tdStyle} />;
            })}
            <td className={tdStyle}>
              <div className={optionsStyle}>
                <MoreVerticalOutline width={20} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <thead className={theadStyle}>
        {headerModel.map((row, rowIndex) => (
          <tr key={`row_${rowIndex}`} className={trStyle}>
            {row.map((cell, colIndex) => (
              <th key={`thcell_${rowIndex}_${colIndex}`} {...cell} className={`${thStyle}`} />
            ))}
            {rowIndex === 0 && <th className={thStyle} rowSpan={2}></th>}
          </tr>
        ))}
      </thead>
    </table>
  );
};
