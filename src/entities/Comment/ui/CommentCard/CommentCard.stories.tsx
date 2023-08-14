
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/CommentCard',
   component: CommentCard,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof CommentCard>;

const Template: StoryFn <typeof CommentCard> = (args) => <CommentCard {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



