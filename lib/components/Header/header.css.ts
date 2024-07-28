import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme.css.ts';

export const welcome = style({
  color: vars.color.Neutral_Neutral00,
  fontSize: 14,
  marginRight: 10,
});
