import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-themes';

/* import to your tailwind styles file */
import '../src/index.css';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        small: { name: 'Small', styles: { width: '640px', height: '100%' } },
        medium: { name: 'Medium', styles: { width: '768px', height: '100%' } },
        large: { name: 'Large', styles: { width: '1024px', height: '100%' } },
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#1E293B' },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
