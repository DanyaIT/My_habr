
import { ArticlePageFilter } from './ArticlePageFilter';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'features/ArticlePageFilter',
   component: ArticlePageFilter,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlePageFilter>;

const Template: StoryFn <typeof ArticlePageFilter> = (args) => <ArticlePageFilter {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



