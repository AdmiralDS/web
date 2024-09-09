import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { text } from '#lib/theme/values/text';

export const menuCN = style({
  border: 'none',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  overflow: 'hidden',
  position: 'relative',

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const menuItemCN = style({
  textAlign: 'start',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

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
    [`${menuCN}[data-size="l"] &`]: {
      padding: '12px 16px',
    },
    [`${menuCN}[data-size="s"] &`]: {
      ...text['Body/Body 2 Long'],
      padding: '6px 12px',
    },
  },
});
