import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';

export const tableWrapper = style({
  overflow: 'auto',
  width: '100%',
  display: 'block',
  margin: '0 auto',
  whiteSpace: 'nowrap',
  color: vars.color.Neutral_Neutral90,
});

export const tableStyle = style({
  borderCollapse: 'collapse',
  borderSpacing: '0px',
});

// фиксируем заголовок при вертикальном скролле
export const theadStyle = style({
  position: 'sticky',
  top: '1px',
});

export const tdStyle = style({
  backgroundColor: vars.color.Neutral_Neutral00,
  padding: '12px',
  borderBottom: `1px solid ${vars.color.Primary_Primary20}`,
  borderRight: `1px solid ${vars.color.Primary_Primary20}`,
  selectors: {
    '&:last-child': {
      borderRight: 'none',
    },
    '&:first-child': {
      position: 'sticky',
      left: '1px',
      backgroundColor: vars.color.Neutral_Neutral00,
    },
  },
});

export const thStyle = style({
  padding: '10px 12px',
  backgroundColor: vars.color.Neutral_Neutral05,
  textAlign: 'left',
  verticalAlign: 'top',
  borderBottom: `1px solid ${vars.color.Primary_Primary20}`,
  borderRight: `1px solid ${vars.color.Primary_Primary20}`,
  selectors: {
    '&:last-child': {
      width: '100%',
      borderRight: 'none',
    },
    '&:first-child': {
      position: 'sticky',
      left: '1px',
      backgroundColor: vars.color.Neutral_Neutral05,
      width: '80px',
    },
  },
});

export const trStyle = style({
  selectors: {
    [`&:has(input[type="checkbox"]:checked) .${tdStyle}`]: {
      backgroundColor: vars.color.Primary_Primary20,
      borderBottom: `1px solid ${vars.color.Primary_Primary20}`,
    },
    [`&:hover .${tdStyle}`]: {
      backgroundColor: vars.color.Primary_Primary10,
    },
    [`&:last-of-type .${tdStyle}`]: {
      borderBottom: 'none',
    },
  },
});

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '58px',
});

export const container = style({
  display: 'flex',
  color: vars.color.Primary_Primary60Main,
});

export const tableWrapperContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  backgroundColor: vars.color.Neutral_Neutral00,
});
