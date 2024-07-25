import { createGlobalThemeContract, createTheme } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract(
  {
    color: {
      Neutral_Neutral00: 'color-Neutral_Neutral00',
      Neutral_Neutral10: 'color-Neutral_Neutral10',
      Neutral_Neutral30: 'color-Neutral_Neutral30',
      Primary_Primary60Main: 'color-Primary_Primary60Main',
      Primary_Primary70: 'color-color-Primary_Primary70',
      Primary_Primary80: 'color-color-Primary_Primary80',
      Special_StaticWhite: 'color-Special_StaticWhite',
    },
  },
  (value) => `admiral-${value}`,
);

export const lightTheme = createTheme(vars, {
  color: {
    Neutral_Neutral00: '#FFFFFF',
    Neutral_Neutral10: '#E5E7EB',
    Neutral_Neutral30: '#B0B5BD',
    Primary_Primary60Main: '#0062FF',
    Primary_Primary70: '#0046E2',
    Primary_Primary80: '#0132B0',
    Special_StaticWhite: '#FFFFFF',
  },
});
