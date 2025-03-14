import {
  tableStyle,
  theadStyle,
  thStyle,
  tdStyle,
  trStyle,
  optionsStyle,
  menuCell,
  tBodyStyle,
  global,
} from './styles.css.ts';
import MoreVerticalOutline from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg?react';

type TableBaseProps = {
  headerModel: React.ComponentProps<'th'>[][];
  bodyModel: React.ComponentProps<'td'>[][];
} & React.ComponentProps<'table'>;

export const TableBaseHTML = ({ headerModel, bodyModel, ...props }: TableBaseProps) => {
  return (
    <table className={[tableStyle, global].join(' ')} {...props}>
      <tbody className={tBodyStyle}>
        {bodyModel.map((row, rowIndex) => (
          <tr key={`row_${rowIndex}`} className={trStyle}>
            {row.map(({ className, ...cell }, colIndex) => {
              return <td key={`cell_${rowIndex}_${colIndex}`} {...cell} className={[tdStyle, className].join(' ')} />;
            })}
            <td className={menuCell}>
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
            {row.map(({ className, ...cell }, colIndex) => (
              <th key={`thcell_${rowIndex}_${colIndex}`} {...cell} className={[thStyle, className].join(' ')} />
            ))}
            <th className={menuCell}></th>
          </tr>
        ))}
      </thead>
    </table>
  );
};
