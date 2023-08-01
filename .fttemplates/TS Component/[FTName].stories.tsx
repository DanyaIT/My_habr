
import { [FTName] } from './[FTName]';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/[FTName]',
   component: [FTName],
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof [FTName]>;

const Template: StoryFn <typeof [FTName]> = (args) => <[FTName] {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



