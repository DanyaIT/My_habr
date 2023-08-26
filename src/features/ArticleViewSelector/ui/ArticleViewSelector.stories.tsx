
import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/ArticleViewSelector',
   component: ArticleViewSelector,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleViewSelector>;

const Template: StoryFn <typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



