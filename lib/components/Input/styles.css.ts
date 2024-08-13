import { style } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { text } from '#lib/theme/values/text';

export const focusBox = style({
  cursor: 'text',

  display: 'inline-flex',
  overflow: 'hidden',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  alignItems: 'stretch',

  boxSizing: 'border-box',
  borderRadius: vars.borderRadius.Medium,

  background: 'transparent',
  transform: 'translate3d(0, 0, 0)', // https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome
  boxShadow: `0px 0px 0px 1px ${vars.color.Neutral_Neutral40} inset`,
  transition: 'box-shadow 0.3s ease-in-out',

  height: '40px',
  paddingInline: '16px',

  selectors: {
    '&[data-size="xl"]': {
      height: '56px',
    },
    '&[data-size="s"]': {
      height: '32px',
      paddingInline: '12px',
    },
    '&:hover:not(:focus-within)': {
      boxShadow: `0px 0px 0px 1px ${vars.color.Neutral_Neutral60} inset`,
    },
    '&:focus-within': {
      boxShadow: `0px 0px 0px 2px ${vars.color.Primary_Primary60Main} inset`,
    },
  },
});

export const inputLine = style({
  border: 'none',
  outline: 'none',
  appearance: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  WebkitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  textOverflow: 'ellipsis',
  padding: 0,

  ...text['Body/Body 1 Long'],
  lineHeight: '40px',

  selectors: {
    '&.is-tmp-value': {
      color: vars.color.Neutral_Neutral30,
    },
    [`${focusBox}[data-size="xl"] &`]: {
      lineHeight: '56px',
    },
    [`${focusBox}[data-size="s"] &`]: {
      ...text['Body/Body 2 Long'],
      lineHeight: '32px',
    },
  },

  '::placeholder': {
    color: vars.color.Neutral_Neutral50,
  },
});

// export const FocusBox = styled.div`
//   cursor: text;
//   display: inline-flex;
//   overflow: hidden;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   align-items: stretch;

//   height: 40px;
//   padding: 0;
//   padding-inline-start: 16px;
//   padding-inline-end: 16px;

//   & * {
//     ${(p) => p.theme.typography['Body/Body 1 Long']}
//     line-height: 40px;
//   }
//   &[data-size='xl'] {
//     height: 56px;
//     & * {
//       line-height: 56px;
//     }
//   }
//   &[data-size='s'] {
//     height: 32px;
//     padding-inline-start: 12px;
//     padding-inline-end: 12px;
//     & * {
//       ${(p) => p.theme.typography['Body/Body 2 Long']}
//       line-height: 32px;
//     }
//   }

//   box-sizing: border-box;
//   border-radius: 4px;

//   background: transparent;
//   /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
//   transform: translate3d(0, 0, 0);
//   box-shadow: 0px 0px 0px 1px ${(p) => p.theme.color['Neutral/Neutral 40']} inset;

//   &:hover:not(:focus-within) {
//     box-shadow: 0px 0px 0px 1px ${(p) => p.theme.color['Neutral/Neutral 60']} inset;
//   }

//   &:focus-within {
//     box-shadow: 0px 0px 0px 2px ${(p) => p.theme.color['Primary/Primary 60 Main']} inset;
//   }

//   transition: box-shadow 0.3s ease-in-out;
// `;
