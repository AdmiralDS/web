import { style } from '@vanilla-extract/css';
import { vars } from '@admiral-ds/web';

export const tableWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  backgroundColor: vars.color.Neutral_Neutral00,
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
