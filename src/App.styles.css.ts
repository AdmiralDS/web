import { style } from '@vanilla-extract/css';
import { vars } from '@admiral-ds/web';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '58px',
});

export const container = style({
  display: 'flex',
  color: vars.color.Primary_Primary60Main,
});
