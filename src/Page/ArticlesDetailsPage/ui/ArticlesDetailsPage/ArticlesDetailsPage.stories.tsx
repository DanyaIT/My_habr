
import ArticlesDetailsPage  from './ArticlesDetailsPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/ArticlesDetailsPage',
   component: ArticlesDetailsPage,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesDetailsPage>;

const Template: StoryFn <typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



