
import { ListBox } from "./ListBox";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreProvider } from 'app/providers/StoreProvider';


export default {
   title: 'shared/ListBox',
   component: ListBox,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ListBox>;

const Template: StoryFn <typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({});
Normal.args = {};



