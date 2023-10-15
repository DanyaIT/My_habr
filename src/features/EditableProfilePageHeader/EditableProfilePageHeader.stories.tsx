
import { EditableProfilePageHeader } from './EditableProfilePageHeader';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';


export default {
   title: 'features/EditableProfilePageHeader',
   component: EditableProfilePageHeader,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreProvider],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof EditableProfilePageHeader>;

const Template: StoryFn <typeof EditableProfilePageHeader> = (args) => <EditableProfilePageHeader {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



