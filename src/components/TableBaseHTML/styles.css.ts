import { style } from '@vanilla-extract/css';
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

// фиксируем заголовок при вертикальном скролле
export const theadStyle = style({
  position: 'sticky',
  top: '0px',
});

// Стиль для строки (tr)
export const trStyle = style({
  selectors: {
    '&:first-child': {
      position: 'sticky',
      left: '0px',
      backgroundColor: vars.color.Neutral_Neutral00,
    },
  },
});

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
      backgroundColor: vars.color.Neutral_Neutral05,
      width: '80px',
    },
    [`${trStyle}:first-child > &:last-child`]: {
      position: 'sticky',
      opacity: '0.5',
    },
  },
});

// Стиль для ячейки (td)
export const tdStyle = style({
  backgroundColor: vars.color.Neutral_Neutral00,
  padding: '12px',
  borderBottom: `1px solid ${vars.color.Neutral_Neutral20}`,
  borderRight: `1px solid ${vars.color.Neutral_Neutral20}`,
  selectors: {
    // Убираем правую границу у последней ячейки
    '&:last-child': {
      borderRight: 'none',
      position: 'sticky',
      right: '0',
      opacity: '0',
    },
    [`${trStyle}:hover &:last-child`]: {
      backgroundColor: vars.color.Neutral_Neutral00,
      borderLeft: `1px solid ${vars.color.Neutral_Neutral20}`,
      opacity: '1',
    },
    // Фиксированная колонка (первая ячейка)
    '&:first-child': {
      position: 'sticky',
      left: '0px',
      backgroundColor: vars.color.Neutral_Neutral00,
    },
    // При наведении на строку (tr) изменяем фон ячейки
    [`${trStyle}:hover &`]: {
      backgroundColor: vars.color.Primary_Primary10,
    },
    // Если в строке (tr) отмечен чекбокс, задаём другой фон и нижнюю границу для ячейки
    [`${trStyle}:has(input[type="checkbox"]:checked) &`]: {
      backgroundColor: vars.color.Primary_Primary20,
      borderBottom: `1px solid ${vars.color.Neutral_Neutral20}`,
    },
    // Если строка последняя, убираем нижнюю границу ячейки
    [`${trStyle}:last-of-type &`]: {
      borderBottom: 'none',
    },
  },
});
