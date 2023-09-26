
import ArticlesPage  from './ArticlesPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
   title: 'Page/ArticlesPage',
   component: ArticlesPage,
   decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesPage>;

const Template: StoryFn <typeof ArticlesPage> = (args) => <ArticlesPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   
};
Normal.decorators = [StoreDecorator({})]



