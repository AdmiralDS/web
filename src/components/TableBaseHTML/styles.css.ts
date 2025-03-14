import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { text } from '#lib/theme/values/text';

export const tableStyle = style({
  overflow: 'auto',
  width: '100%',
  display: 'block',
  margin: '0 auto',
  color: vars.color.Neutral_Neutral90,
  borderSpacing: '0px',
  borderCollapse: 'separate',
  border: `1px solid ${vars.color.Neutral_Neutral20}`,
});

// фиксируем заголовок при вертикальном скролле
export const theadStyle = style({
  position: 'sticky',
  top: '0px',
  backgroundColor: vars.color.Neutral_Neutral05,
  ...text['Subtitle/Subtitle 3'],
});

export const tBodyStyle = style({
  whiteSpace: 'nowrap',
  backgroundColor: vars.color.Neutral_Neutral00,
  ...text['Body/Body 2 Short'],
});

// Стиль для строки (tr)
export const trStyle = style({
  backgroundColor: vars.color.Neutral_Neutral00,
  selectors: {
    // Hover над строкой
    [`&:hover`]: {
      backgroundColor: vars.color.Primary_Primary10,
    },
    // Если в строке (tr) отмечен чекбокс, задаём другой фон
    [`&:not(:hover):has(input[type="checkbox"]:checked)`]: {
      backgroundColor: vars.color.Primary_Primary20,
    },
  },
});

globalStyle(`${tableStyle} .fixed`, { position: 'sticky', left: '0px' });

export const alignRight = style({
  textAlign: 'right',
});

export const thStyle = style({
  padding: '10px 12px',
  backgroundColor: vars.color.Neutral_Neutral05,
  textAlign: 'left',
  verticalAlign: 'top',
  boxShadow: `inset -1px -1px ${vars.color.Neutral_Neutral20}`,
  selectors: {
    /* последняя колонка растягивается в ширину при необходимости */
    '&:last-child': {
      width: '100%',
    },
    /* 1 колонка header'a фиксирована при горизонтальном скролле */
    [`${trStyle}:first-child > &:first-child`]: {
      position: 'sticky',
      left: '0px',
    },
    [`&:last-of-type`]: {
      // убираем бордер справа
      boxShadow: `inset 0 -1px ${vars.color.Neutral_Neutral20}`,
    },
  },
});

export const menuCell = style({
  position: 'sticky',
  right: '0',
  selectors: {
    [`&&`]: {
      backgroundColor: 'transparent',
      padding: 0,
    },
    [`${trStyle}:hover &`]: {
      backgroundColor: 'inherit',
    },
  },
});

// Стиль для ячейки (td)
export const tdStyle = style({
  boxSizing: 'border-box',
  height: 40,
  padding: '10px 13px',
  backgroundColor: 'inherit',
  boxShadow: `inset -1px -1px ${vars.color.Neutral_Neutral20}`,
  selectors: {
    // Если строка последняя, убираем нижнюю границу ячейки
    [`${trStyle}:last-of-type &`]: {
      boxShadow: `inset -1px 0 ${vars.color.Neutral_Neutral20}`,
    },

    // Eсли это последняя ячейка перед меню...
    [`&:has(+ ${menuCell})`]: {
      // убираем бордер справа
      boxShadow: `inset 0 -1px ${vars.color.Neutral_Neutral20}`,
      // растягиваем максимально
      width: '100%',
    },
    [`&:last-of-type`]: {
      // убираем бордер справа
      boxShadow: `inset 0 -1px ${vars.color.Neutral_Neutral20}`,
    },
    [`${trStyle}:last-of-type &:has(+ ${menuCell})`]: {
      boxShadow: 'none',
    },
    [`${trStyle}:last-of-type &:last-of-type`]: {
      boxShadow: 'none',
    },
  },
});

export const optionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
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
