import * as React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { lightThemeClassName, darkThemeClassName, vars } from '@admiral-ds/web';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: lightThemeClassName,
        dark: darkThemeClassName,
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div style={{ backgroundColor: vars.color.Neutral_Neutral00, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
