
import { EditableProfilePageHeader } from './EditableProfilePageHeader';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';


export default {
   title: 'features/EditableProfilePageHeader',
   component: EditableProfilePageHeader,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof EditableProfilePageHeader>;

const Template: StoryFn <typeof EditableProfilePageHeader> = (args) => <EditableProfilePageHeader {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



