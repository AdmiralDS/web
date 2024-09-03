import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { text } from '#lib/theme/values/text';

export const menuClassName = style({
  border: 'none',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const menuItem = style({
  textAlign: 'start',

  // size m specific
  padding: '8px 16px',
  ...text['Body/Body 1 Long'],

  selectors: {
    '&:hover:not([aria-disabled="true"])': {
      backgroundColor: vars.color.Opacity_Hover,
    },
    '&[aria-disabled="true"]': {
      color: vars.color.Neutral_Neutral30,
      cursor: 'not-allowed',
    },
    [`${menuClassName}[data-size="l"] &`]: {
      padding: '12px 16px',
    },
    [`${menuClassName}[data-size="s"] &`]: {
      ...text['Body/Body 2 Long'],
      padding: '6px 12px',
    },
  },
});
