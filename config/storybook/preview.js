import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {SuspenseDecorator} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'




export const preview = {
  parameters: {
    decorators:[
      StyleDecorator,
      SuspenseDecorator,
      RouterDecorator,
      ThemeDecorator(Theme.DARK)
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



