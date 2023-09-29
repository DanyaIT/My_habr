
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/ArticlesDetailsPageHeader',
   component: ArticlesDetailsPageHeader,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesDetailsPageHeader>;

const Template: StoryFn <typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



