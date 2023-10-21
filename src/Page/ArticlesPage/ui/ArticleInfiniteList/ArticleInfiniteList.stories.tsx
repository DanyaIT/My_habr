
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
   title: 'Page/ArticleInfiniteList',
   component: ArticleInfiniteList,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({})],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleInfiniteList>;

const Template: StoryFn <typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



