
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'features/ArticleTypeTabs',
   component: ArticleTypeTabs,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleTypeTabs>;

const Template: StoryFn <typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



