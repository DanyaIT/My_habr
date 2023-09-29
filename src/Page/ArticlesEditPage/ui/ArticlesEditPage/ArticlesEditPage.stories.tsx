
import { ArticlesEditPage } from "Page/ArticlesEditPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'Page/ArticlesEditPage',
   component: ArticlesEditPage,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesEditPage>;

const Template: StoryFn <typeof ArticlesEditPage> = (args) => <ArticlesEditPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



