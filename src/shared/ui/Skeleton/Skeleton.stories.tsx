
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/Skeleton',
   component: Skeleton,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Skeleton>;

const Template: StoryFn <typeof Skeleton> = (args) => <Skeleton {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   width: 200,
   height: 100,
};


export const Circle = Template.bind({});
Circle.args = {
   border: '50%',
   width: 100,
   height: 100,
};


