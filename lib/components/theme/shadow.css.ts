import { styleVariants } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';

export const shadowStyle = styleVariants({
  'Shadow 02': {
    boxShadow: vars.boxShadow.Shadow_02,
  },
  'Shadow 04': {
    boxShadow: vars.boxShadow.Shadow_04,
  },
  'Shadow 08': {
    boxShadow: vars.boxShadow.Shadow_08,
  },
  'Shadow 12': {
    boxShadow: vars.boxShadow.Shadow_12,
  },
  'Shadow 16': {
    boxShadow: vars.boxShadow.Shadow_16,
  },
  'Shadow Stroke': {
    boxShadow: vars.boxShadow.Shadow_Stroke,
  },
});
