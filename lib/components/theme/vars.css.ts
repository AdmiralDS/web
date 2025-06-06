import { createGlobalThemeContract } from '@vanilla-extract/css';

const unprefixedColorNameToVar = {
  Neutral_Neutral00: 'color-Neutral_Neutral00',
  Neutral_Neutral05: 'color-Neutral_Neutral05',
  Neutral_Neutral10: 'color-Neutral_Neutral10',
  Neutral_Neutral20: 'color-Neutral_Neutral20',
  Neutral_Neutral30: 'color-Neutral_Neutral30',
  Neutral_Neutral40: 'color-Neutral_Neutral40',
  Neutral_Neutral50: 'color-Neutral_Neutral50',
  Neutral_Neutral60: 'color-Neutral_Neutral60',
  Neutral_Neutral70: 'color-Neutral_Neutral70',
  Neutral_Neutral80: 'color-Neutral_Neutral80',
  Neutral_Neutral90: 'color-Neutral_Neutral90',
  Primary_Primary10: 'color-Primary_Primary10',
  Primary_Primary20: 'color-Primary_Primary20',
  Primary_Primary30: 'color-Primary_Primary30',
  Primary_Primary40: 'color-Primary_Primary40',
  Primary_Primary50: 'color-Primary_Primary50',
  Primary_Primary60Main: 'color-Primary_Primary60Main',
  Primary_Primary70: 'color-Primary_Primary70',
  Primary_Primary80: 'color-Primary_Primary80',
  Special_StaticWhite: 'color-Special_StaticWhite',
  Special_ElevatedBG: 'color-Special_ElevatedBG',
  Special_DarkStaticNeutral00: 'color-Special_DarkStaticNeutral00',
  Special_DarkStaticNeutral05: 'color-Special_DarkStaticNeutral05',
  Special_DarkStaticNeutral10: 'color-Special_DarkStaticNeutral10',
  Special_DarkStaticNeutral20: 'color-Special_DarkStaticNeutral20',
  Special_DarkStaticNeutral30: 'color-Special_DarkStaticNeutral30',
  Special_DarkStaticNeutral50: 'color-Special_DarkStaticNeutral50',
  Special_DarkStaticNeutral70: 'color-Special_DarkStaticNeutral70',
  Special_DarkStaticNeutral80: 'color-Special_DarkStaticNeutral80',
  Special_DarkStaticNeutral90: 'color-Special_DarkStaticNeutral90',
  Special_DarkStaticPrimary60: 'color-Special_DarkStaticPrimary60',
  Special_DarkStaticPrimary70: 'color-Special_DarkStaticPrimary70',
  Special_DarkStaticPrimary80: 'color-Special_DarkStaticPrimary80',
  Special_DarkStaticError60: 'color-Special_DarkStaticError60',
  Special_DarkStaticSuccess50: 'color-Special_DarkStaticSuccess50',
  Opacity_Hover: 'color-Opacity_Hover',
  Opacity_Focus: 'color-Opacity_Focus',
  Opacity_Press: 'color-Opacity_Press',
  Opacity_Modal: 'color-Opacity_Modal',
  Opacity_DarkStaticHover: 'color-Opacity_DarkStaticHover',
  Opacity_DarkStaticFocus: 'color-Opacity_DarkStaticFocus',
  Opacity_DarkStaticPress: 'color-Opacity_DarkStaticPress',
  Opacity_Neutral4: 'color-Opacity_Neutral4',
  Opacity_Neutral8: 'color-Opacity_Neutral8',
  Opacity_Neutral12: 'color-Opacity_Neutral12',
  Opacity_Neutral16: 'color-Opacity_Neutral16',
  Error_Error10: 'color-Error_Error10',
  Error_Error20: 'color-Error_Error20',
  Error_Error30: 'color-Error_Error30',
  Error_Error40: 'color-Error_Error40',
  Error_Error50: 'color-Error_Error50',
  Error_Error60Main: 'color-Error_Error60Main',
  Error_Error70: 'color-Error_Error70',
  Error_Error80: 'color-Error_Error80',
  Success_Success10: 'color-Success_Success10',
  Success_Success20: 'color-Success_Success20',
  Success_Success30: 'color-Success_Success30',
  Success_Success40: 'color-Success_Success40',
  Success_Success50Main: 'color-Success_Success50Main',
  Success_Success60: 'color-Success_Success60',
  Success_Success70: 'color-Success_Success70',
  Warning_Warning10: 'color-Warning_Warning10',
  Warning_Warning20: 'color-Warning_Warning20',
  Warning_Warning30: 'color-Warning_Warning30',
  Warning_Warning40: 'color-Warning_Warning40',
  Warning_Warning50Main: 'color-Warning_Warning50Main',
  Warning_Warning60: 'color-Warning_Warning60',
  Warning_Warning70: 'color-Warning_Warning70',
  Attention_Attention10: 'color-Attention_Attention10',
  Attention_Attention20: 'color-Attention_Attention20',
  Attention_Attention30: 'color-Attention_Attention30',
  Attention_Attention40: 'color-Attention_Attention40',
  Attention_Attention50Main: 'color-Attention_Attention50Main',
  Attention_Attention60: 'color-Attention_Attention60',
  Attention_Attention70: 'color-Attention_Attention70',
  Purple_Purple10: 'color-Purple_Purple10',
  Purple_Purple20: 'color-Purple_Purple20',
  Purple_Purple30: 'color-Purple_Purple30',
  Purple_Purple40: 'color-Purple_Purple40',
  Purple_Purple50: 'color-Purple_Purple50',
  Purple_Purple60Main: 'color-Purple_Purple60Main',
  Purple_Purple70: 'color-Purple_Purple70',
  Purple_Purple80: 'color-Purple_Purple80',
  Magenta_Magenta10: 'color-Magenta_Magenta10',
  Magenta_Magenta20: 'color-Magenta_Magenta20',
  Magenta_Magenta30: 'color-Magenta_Magenta30',
  Magenta_Magenta40: 'color-Magenta_Magenta40',
  Magenta_Magenta50: 'color-Magenta_Magenta50',
  Magenta_Magenta60Main: 'color-Magenta_Magenta60Main',
  Magenta_Magenta70: 'color-Magenta_Magenta70',
  Magenta_Magenta80: 'color-Magenta_Magenta80',
  Cyan_Cyan10: 'color-Cyan_Cyan10',
  Cyan_Cyan20: 'color-Cyan_Cyan20',
  Cyan_Cyan30: 'color-Cyan_Cyan30',
  Cyan_Cyan40: 'color-Cyan_Cyan40',
  Cyan_Cyan50: 'color-Cyan_Cyan50',
  Cyan_Cyan60Main: 'color-Cyan_Cyan60Main',
  Cyan_Cyan70: 'color-Cyan_Cyan70',
  Cyan_Cyan80: 'color-Cyan_Cyan80',
  Teal_Teal10: 'color-Teal_Teal10',
  Teal_Teal20: 'color-Teal_Teal20',
  Teal_Teal30: 'color-Teal_Teal30',
  Teal_Teal40: 'color-Teal_Teal40',
  Teal_Teal50: 'color-Teal_Teal50',
  Teal_Teal60Main: 'color-Teal_Teal60Main',
  Teal_Teal70: 'color-Teal_Teal70',
  Teal_Teal80: 'color-Teal_Teal80',
} as const;

const unprefixedBorderRadiusToVar = {
  Small: 'border-radius-s',
  Medium: 'border-radius-m',
  Large: 'border-radius-l',
} as const;

const unprefixedFontNameToVar = {
  fontFamily: 'font-family',
} as const;

const unprefixedBoxShadowToVar = {
  Shadow_02: 'box-shadow-02',
  Shadow_04: 'box-shadow-04',
  Shadow_08: 'box-shadow-08',
  Shadow_12: 'box-shadow-12',
  Shadow_16: 'box-shadow-16',
  Shadow_Stroke: 'box-shadow-stroke',
} as const;

export const vars = createGlobalThemeContract(
  {
    color: unprefixedColorNameToVar,
    font: unprefixedFontNameToVar,
    borderRadius: unprefixedBorderRadiusToVar,
    boxShadow: unprefixedBoxShadowToVar,
  },
  (value) => `admiral-${value}`,
);
