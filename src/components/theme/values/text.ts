import { vars } from '../vars.css.ts';

export const text = {
  /**
   * Большой заголовок для лендингов. Не применяется на мобильных устройствах.
   */
  'Header/HL1': {
    fontFamily: vars.font.fontFamily,
    fontSize: 72,
    fontWeight: 550,
    lineHeight: '80px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /**
   * Большой заголовок для лендингов. Не применяется на мобильных устройствах.
   */
  'Header/HL2': {
    fontFamily: vars.font.fontFamily,
    fontSize: 56,
    fontWeight: 550,
    lineHeight: '64px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /**
   * Большой заголовок для лендингов. Не применяется на мобильных устройствах.
   */
  'Header/HL3': {
    fontFamily: vars.font.fontFamily,
    fontSize: 48,
    fontWeight: 550,
    lineHeight: '56px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /**
   * Заголовок первого уровня. Используется в случаях, когда много пространства и используются компоненты размера XL
   */
  'Header/H1': {
    fontFamily: vars.font.fontFamily,
    fontSize: 40,
    fontWeight: 550,
    lineHeight: '48px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /**
   * Заголовок второго уровня. Используется в случаях, когда много пространства и используются компоненты размера XL
   */
  'Header/H2': {
    fontFamily: vars.font.fontFamily,
    fontSize: 34,
    fontWeight: 550,
    lineHeight: '40px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Заголовок третьего уровня. Как правило, самый большой размер для стандартных интерфейсов размера M и S */
  'Header/H3': {
    fontFamily: vars.font.fontFamily,
    fontSize: 28,
    fontWeight: 550,
    lineHeight: '36px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Заголовок четвертого уровня. Рекомендуемый максимальный размер заголовка для мобильных устройств. */
  'Header/H4': {
    fontFamily: vars.font.fontFamily,
    fontSize: 24,
    fontWeight: 550,
    lineHeight: '32px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Заголовок пятого уровня */
  'Header/H5': {
    fontFamily: vars.font.fontFamily,
    fontSize: 20,
    fontWeight: 550,
    lineHeight: '28px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Заголовок шестого уровня */
  'Header/H6': {
    fontFamily: vars.font.fontFamily,
    fontSize: 18,
    fontWeight: 550,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },

  /** Крупный шрифт параграфа, может использоваться как подзаголовок */
  'Subtitle/Subtitle 1': {
    fontFamily: vars.font.fontFamily,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },

  /** Акцентированный текст, подзаголовок */
  'Subtitle/Subtitle 2': {
    fontFamily: vars.font.fontFamily,
    fontSize: 16,
    fontWeight: 550,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },

  /** Акцентированный текст, подзаголовок */
  'Subtitle/Subtitle 3': {
    fontFamily: vars.font.fontFamily,
    fontSize: 14,
    fontWeight: 550,
    lineHeight: '20px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },

  /** Основной шрифт системы первого уровня для набора больших текстов */
  'Body/Body 1 Long': {
    fontFamily: vars.font.fontFamily,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Шрифт системы первого уровня для набора коротких текстов в 1-2 строки (не обязательный сценарий) */
  'Body/Body 1 Short': {
    fontFamily: vars.font.fontFamily,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Основной шрифт системы второго уровня для набора больших текстов */
  'Body/Body 2 Long': {
    fontFamily: vars.font.fontFamily,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Шрифт системы второго уровня для набора коротких текстов в 1-2 строки (не обязательный сценарий) */
  'Body/Body 2 Short': {
    fontFamily: vars.font.fontFamily,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '16px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Шрифт в кнопках первого уровня */
  'Button/Button 1': {
    fontFamily: vars.font.fontFamily,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Шрифт в кнопках второго уровня */
  'Button/Button 2': {
    fontFamily: vars.font.fontFamily,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Применяется в компонентах, сносках, примечаниях, счетчиках и тд. Не рекомендуется для набора текстов. */
  'Caption/Caption 1': {
    fontFamily: vars.font.fontFamily,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '16px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
  /** Самый маленький шрифт системы. Не используется в компонентах системы, не рекомендуется для набора текстов. Использовать только в крайних случаях. */
  'Caption/Caption 2': {
    fontFamily: vars.font.fontFamily,
    fontSize: 10,
    fontWeight: 400,
    lineHeight: '12px',
    fontFeatureSettings: "'tnum' on,'lnum' on",
    textRendering: 'geometricPrecision',
  },
} as const;
