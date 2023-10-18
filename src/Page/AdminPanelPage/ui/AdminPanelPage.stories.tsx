
import  AdminPanelPage  from './AdminPanelPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'PageAdminPanelPage',
   component: AdminPanelPage,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AdminPanelPage>;

const Template: StoryFn <typeof AdminPanelPage> = (args) => <AdminPanelPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



