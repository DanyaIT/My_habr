
import { ArticlesDetailsPageComments } from './ArticlesDetailsPageComments';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';



export default {
   title: 'Page/ArticlesDetailsPageComments',
   component: ArticlesDetailsPageComments,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesDetailsPageComments>;

const Template: StoryFn <typeof ArticlesDetailsPageComments> = (args) => <ArticlesDetailsPageComments {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   id: '1',
};

Normal.decorators = [StoreDecorator({})];

