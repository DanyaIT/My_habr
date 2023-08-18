
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';


export default {
   title: 'entities/CommentCard',
   component: CommentCard,
   decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof CommentCard>;

const Template: StoryFn <typeof CommentCard> = (args) => <CommentCard {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   comment:{
      id: '1',
      articleId: '1',
      text: "some text 1",
      user: {username: 'Overlab', id: '1', avatar:'https://adiariocr.com/wp-content/uploads/2018/06/Cibercrimen4.jpg'}
   }
};

export const Loading = Template.bind({})
Loading.args = {
   isLoading: true,
}

