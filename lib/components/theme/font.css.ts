import { styleVariants } from '@vanilla-extract/css';
import { vars } from './vars.css.ts';

type FontSize = {
  12: string;
  14: string;
  16: string;
  18: string;
  22: string;
  28: string;
  32: string;
  36: string;
  42: string;
};

const FONT_SIZE: FontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  22: '22px',
  28: '28px',
  32: '32px',
  36: '36px',
  42: '42px',
};

type FontWeight = {
  normal: number;
  medium: number;
  bold: number;
};

const FONT_WEIGHT: FontWeight = {
  normal: 400,
  medium: 500,
  bold: 600,
};

type LineHeight = {
  16: string;
  20: string;
  24: string;
  28: string;
  36: string;
  40: string;
  44: string;
  52: string;
};

const LINE_HEIGHT: LineHeight = {
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  36: '36px',
  40: '40px',
  44: '44px',
  52: '52px',
};

export type Typography = {
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
};

export const TYPOGRAPHY: Typography = {
  fontSize: FONT_SIZE,
  fontWeight: FONT_WEIGHT,
  lineHeight: LINE_HEIGHT,
};

export const typography = styleVariants({
  'Header/HL1': {
    color: vars.color.Neutral_Neutral90,
    fontFamily: 'VTB Group UI',
    fontSize: 72,
    fontWeight: 550,
    lineHeight: '80px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  'Subtitle/Subtitle 1': {
    color: vars.color.Neutral_Neutral90,
    fontFamily: 'VTB Group UI',
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
});
