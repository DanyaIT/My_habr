
import  ForbiddenPage  from './ForbiddenPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { UserRole } from 'entities/User';


export default {
   title: 'Page/ForbiddenPage',
   component: ForbiddenPage,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn <typeof ForbiddenPage> = (args) => <ForbiddenPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



