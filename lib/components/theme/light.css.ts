import { createTheme } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';
import { color } from './values/color.light.ts';
import { font } from './values/font.ts';
import { borderRadius } from './values/borderRadius.ts';

export const lightThemeValues = {
  color,
  font,
  borderRadius,
} as const;
export const lightThemeClassName = createTheme(vars, lightThemeValues);
