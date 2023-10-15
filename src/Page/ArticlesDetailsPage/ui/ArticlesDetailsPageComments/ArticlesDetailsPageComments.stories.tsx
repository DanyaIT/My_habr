
import { ArticlesDetailsPageComments } from './ArticlesDetailsPageComments';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';


export default {
   title: 'Page/ArticlesDetailsPageComments',
   component: ArticlesDetailsPageComments,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreProvider],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesDetailsPageComments>;

const Template: StoryFn <typeof ArticlesDetailsPageComments> = (args) => <ArticlesDetailsPageComments {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



