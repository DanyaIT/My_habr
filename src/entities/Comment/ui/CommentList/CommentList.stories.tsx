
import { CommentList } from './CommentList';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
   title: 'entities/CommentList',
   component: CommentList,
   decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof CommentList>;

const Template: StoryFn <typeof CommentList> = (args) => <CommentList {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   comments:[
      {
         id: '1',
         articleId: '1',
         text: "some text 1",
         user: {username: 'Overlab', id: '1'}
      },
      {
         id: '2',
         articleId: '2',
         text: "some text 2",
         user: {username: 'Overlab_2', id: '2'}
      }
   ]
};

Normal.decorators = [StoreDecorator({})]


export const Loading = Template.bind({})
Loading.args = {
   comments:[],
   isLoading: true,
}
