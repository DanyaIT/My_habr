
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';


export default {
   title: 'Page/ArticlesDetailsPageHeader',
   component: ArticlesDetailsPageHeader,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticlesDetailsPageHeader>;

const Template: StoryFn <typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



