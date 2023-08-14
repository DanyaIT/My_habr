
import { CommentList } from './CommentList';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/CommentList',
   component: CommentList,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof CommentList>;

const Template: StoryFn <typeof CommentList> = (args) => <CommentList {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



