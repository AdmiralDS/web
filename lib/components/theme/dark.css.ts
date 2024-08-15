import { createTheme } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';
import { color, boxShadow } from './values/color.dark.ts';
import { font } from './values/font.ts';
import { borderRadiusMap } from './values/borderRadiusMap.ts';

export const darkThemeValues = {
  color,
  boxShadow,
  font,
  borderRadius: borderRadiusMap[4],
} as const;
export const darkThemeClassName = createTheme(vars, darkThemeValues);
