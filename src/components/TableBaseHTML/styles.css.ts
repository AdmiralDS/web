import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { text } from '#lib/theme/values/text';

export const tableStyle = style({
  overflow: 'auto',
  width: '100%',
  display: 'block',
  margin: '0 auto',
  whiteSpace: 'nowrap',
  color: vars.color.Neutral_Neutral90,
  borderSpacing: '0px',
  borderCollapse: 'separate',
});

// globalStyle(`${tableStyle} :is(tr, th):not(.fixed)`, { backgroundColor: 'transparent' });

// фиксируем заголовок при вертикальном скролле
export const theadStyle = style({
  position: 'sticky',
  top: '0px',
  backgroundColor: vars.color.Neutral_Neutral05,
});

export const tBodyStyle = style({
  backgroundColor: vars.color.Neutral_Neutral00,
});

// Стиль для строки (tr)
export const trStyle = style({
  backgroundColor: vars.color.Neutral_Neutral00,
});

globalStyle(`${tableStyle} .fixed`, { position: 'sticky', left: '0px' });

export const thStyle = style({
  ...text['Subtitle/Subtitle 3'],
  padding: '10px 12px',
  backgroundColor: vars.color.Neutral_Neutral05,
  textAlign: 'left',
  verticalAlign: 'top',
  borderBottom: `1px solid ${vars.color.Neutral_Neutral20}`,
  borderRight: `1px solid ${vars.color.Neutral_Neutral20}`,

  selectors: {
    /* последняя колонка растягивается в ширину при необходимости */
    '&:last-child': {
      width: '100%',
      right: '0',
      borderLeft: `1px solid ${vars.color.Neutral_Neutral20}`,
    },
    /* 1 колонка header'a фиксирована при горизонтальном скролле */
    [`${trStyle}:first-child > &:first-child`]: {
      position: 'sticky',
      left: '0px',
      width: '80px',
    },
  },
});

export const menuCell = style({
  position: 'sticky',
  right: '0',
});

// Стиль для ячейки (td)
export const tdStyle = style({
  padding: '12px',
  backgroundColor: 'inherit',
  borderBottom: `1px solid ${vars.color.Neutral_Neutral20}`,
  borderRight: `1px solid ${vars.color.Neutral_Neutral20}`,
  selectors: {
    // Hover над строкой
    [`${trStyle}:hover &`]: {
      backgroundColor: vars.color.Primary_Primary10,
    },

    // Если в строке (tr) отмечен чекбокс, задаём другой фон
    [`${trStyle}:has(input[type="checkbox"]:checked) &`]: {
      backgroundColor: vars.color.Primary_Primary20,
    },

    // Если строка последняя, убираем нижнюю границу ячейки
    [`${trStyle}:last-of-type &`]: {
      borderBottom: 'none',
    },
  },
});

export const optionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  visibility: 'hidden',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.Neutral_Neutral20,
      cursor: 'pointer',
    },
    [`${trStyle}:hover &`]: {
      visibility: 'visible',
    },
  },
});
