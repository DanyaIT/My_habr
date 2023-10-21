
import  AdminPanelPage  from './AdminPanelPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
   title: 'Page/PageAdminPanelPage',
   component: AdminPanelPage,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AdminPanelPage>;

const Template: StoryFn <typeof AdminPanelPage> = (args) => <AdminPanelPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



