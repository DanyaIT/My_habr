import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {Navbar} from './Navbar'
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Navbar>;

const Template: StoryFn <typeof Navbar> = (args) => <Navbar {...args}/>

export const Primary = Template.bind({});
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)]

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {}
AuthNavbar.decorators = [StoreDecorator({
  user:{authData: {id: '1', username: 'admin'}}
}), ThemeDecorator(Theme.DARK)]

