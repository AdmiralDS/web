import { tableStyle, theadStyle, thStyle, tdStyle, trStyle, optionsStyle, menuCell, tBodyStyle } from './styles.css.ts';
import MoreVerticalOutline from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg?react';

type TableBaseProps = {
  headerModel: React.ComponentProps<'th'>[][];
  bodyModel: React.ComponentProps<'td'>[][];
} & React.ComponentProps<'table'>;

export const TableBaseHTML = ({ headerModel, bodyModel, ...props }: TableBaseProps) => {
  return (
    <table className={[tableStyle].join(' ')} {...props}>
      <tbody className={tBodyStyle}>
        {bodyModel.map((row, rowIndex) => (
          <tr key={`row_${rowIndex}`} className={trStyle}>
            {row.map(({ className, ...cell }, colIndex) => {
              return <td key={`cell_${rowIndex}_${colIndex}`} {...cell} className={[tdStyle, className].join(' ')} />;
            })}
            <td className={[tdStyle, menuCell].join(' ')}>
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
            {row.map(({ className, colSpan, ...cell }, colIndex) => (
              <th
                key={`thcell_${rowIndex}_${colIndex}`}
                {...cell}
                className={[thStyle, className].join(' ')}
                colSpan={colIndex + 1 < row.length ? colSpan : (colSpan ?? 1) + 1}
              />
            ))}
          </tr>
        ))}
      </thead>
    </table>
  );
};
