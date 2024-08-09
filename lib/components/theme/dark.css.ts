import { createTheme } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';
import { color } from './values/color.dark.ts';
import { font } from './values/font.ts';
import { borderRadius } from './values/borderRadius.ts';

export const darkThemeValues = {
  color,
  font,
  borderRadius,
} as const;
export const darkThemeClassName = createTheme(vars, darkThemeValues);
