import { style, fallbackVar } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';

export const buttonHover = style({
  ':hover': {
    background: fallbackVar(vars.color.Primary_Primary70, '#0046E2'),
  },
});
