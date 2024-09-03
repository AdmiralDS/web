import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';

export const panel = style({
  backgroundColor: vars.color.Special_ElevatedBG,
  borderRadius: vars.borderRadius.Medium,
  boxShadow: vars.boxShadow.Shadow_08,
});
