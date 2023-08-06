
import { Code } from './Code';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/Code',
   component: Code,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Code>;

const Template: StoryFn <typeof Code> = (args) => <Code {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   children: `
   import { Code } from './Code';
   import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
   import { StoryFn , Meta } from "@storybook/react";
   import { Theme } from "app/providers/ThemeProvider";
   
   
   export default {
      title: 'shared/Code',
      component: Code,
      decorators: [ThemeDecorator(Theme.NORMAL)],
      argTypes: {
         backgroundColor: { control: 'color' },
      },
   } as Meta<typeof Code>;
   
   const Template: StoryFn <typeof Code> = (args) => <Code {...args}/>
   
   export const Normal = Template.bind({});`
};

Normal.decorators = [ThemeDecorator(Theme.BLUE)]

