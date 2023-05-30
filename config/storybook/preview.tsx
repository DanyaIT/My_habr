import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Preview, StoryFn } from "@storybook/react";
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'




export const preview: Preview = {
  parameters: {
    decorators:[
      StyleDecorator,
      // RouterDecorator,
      // ThemeDecorator(Theme.DARK)
    ],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};



