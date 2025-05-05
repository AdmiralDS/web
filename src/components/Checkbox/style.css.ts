import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '#lib/theme/vars.css.ts';
import { CheckboxDimension } from './CheckboxDimension';

export const container = style({
  position: 'relative',
  boxSizing: 'border-box',
  borderRadius: vars.borderRadius.Small,
  overflow: 'visible',
  flex: '0 0 auto',
});

export const dimensionStyle = styleVariants({
  m: {
    width: '20px',
    height: '20px',
    selectors: {
      "fieldset[data-dimension='s'] &": {
        width: '16px',
        height: '16px',
      },
    },
  },
  s: {
    width: '16px',
    height: '16px',
    selectors: {
      "fieldset[data-dimension='s'] &": {
        width: '16px',
        height: '16px',
      },
    },
  },
} as Record<CheckboxDimension, ComplexStyleRule>);

export const cursorStyle = styleVariants({
  disabled: { cursor: 'not-allowed' },
  readOnly: { cursor: 'default', pointerEvents: 'none' },
  pointer: { cursor: 'pointer' },
});

export const borderStyle = styleVariants({
  error: {
    border: `1px solid ${vars.color.Error_Error60Main}`,
  },
  neutral: {
    border: `1px solid ${vars.color.Neutral_Neutral50}`,
  },
  // indeterminate: {
  //   border: `1px solid ${vars.color.Primary_Primary60Main}`,
  // },
});

export const inputStyle = style({
  appearance: 'none',
  WebkitAppearance: 'none' /* Для WebKit браузеров */,
  MozAppearance: 'none',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  borderRadius: vars.borderRadius.Small,
  cursor: 'inherit',
  selectors: {
    '&:focus-visible': {
      outlineOffset: '2px',
      outline: `${vars.color.Primary_Primary60Main} solid 2px`,
    },
    // '&::-ms-check': {
    //   display: 'none',
    // },
  },
});

export const svgStyle = style({
  fill: vars.color.Special_StaticWhite,
});

export const svgDisabledNotCheckedStyle = style({
  fill: vars.color.Neutral_Neutral10,
});

export const background = style({
  pointerEvents: 'none',
  display: 'inline-block',
  position: 'absolute',
  margin: '0',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  borderRadius: vars.borderRadius.Small,
  outline: '0',
  transition: 'background-color 0.1s ease-in',
  /* disable inheritance from parent elements */
  lineHeight: 'initial',
  backgroundColor: vars.color.Neutral_Neutral00,

  selectors: {
    [`${inputStyle}:checked + &`]: {
      backgroundColor: vars.color.Primary_Primary60Main,
      border: `1px solid ${vars.color.Primary_Primary60Main}`,
    },
  },
});

export const indeterminateBackgroundStyle = style({
  backgroundColor: vars.color.Primary_Primary60Main,
  border: `1px solid ${vars.color.Primary_Primary60Main}`,
  opacity: 1,
});

export const noHoverStyle = style({
  selectors: {
    [`&:hover::after`]: {
      display: 'none',
    },
  },
});

export const disabledStyle = style({
  cursor: 'not-allowed',
  opacity: 0.5,
  backgroundColor: vars.color.Neutral_Neutral10,
  border: `1px solid ${vars.color.Neutral_Neutral30}`,
});

export const disabledCheckedStyle = style({
  cursor: 'not-allowed',
  opacity: 0.5,
  backgroundColor: vars.color.Primary_Primary30,
  border: `1px solid ${vars.color.Primary_Primary30}`,
});

export const hoveredStyle = style({
  selectors: {
    [`&:hover::after`]: {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      width: 'calc(100% + 16px)',
      height: 'calc(100% + 16px)',
      backgroundColor: vars.color.Opacity_Hover,
      pointerEvents: 'none',
      transition: 'background-color 0.1s ease-in',
    },
  },
});

export const activeStyle = style({
  selectors: {
    '&:active::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      width: 'calc(100% + 16px)',
      height: 'calc(100% + 16px)',
      backgroundColor: vars.color.Opacity_Press,
      pointerEvents: 'none',
      transition: 'background-color 0.1s ease-in',
    },
  },
});
