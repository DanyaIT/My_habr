
import ArticlesPage  from './ArticlesPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'Page/ArticlesPage',
   component: ArticlesPage,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesPage>;

const Template: StoryFn <typeof ArticlesPage> = (args) => <ArticlesPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



