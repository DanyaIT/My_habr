
import { Page } from './Page';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/Page',
   component: Page,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Page>;

const Template: StoryFn <typeof Page> = (args) => <Page {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



