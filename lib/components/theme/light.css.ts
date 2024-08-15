import { createTheme } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';
import { color, boxShadow } from './values/color.light.ts';
import { font } from './values/font.ts';
import { borderRadiusMap } from './values/borderRadiusMap.ts';

export const lightThemeValues = {
  color,
  boxShadow,
  font,
  borderRadius: borderRadiusMap[4],
} as const;
export const lightThemeClassName = createTheme(vars, lightThemeValues);
