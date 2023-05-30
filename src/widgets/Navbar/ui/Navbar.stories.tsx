import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {Navbar} from './Navbar'
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  decorators: [ThemeDecorator(Theme.DARK),RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Navbar>;

const Template: StoryFn <typeof Navbar> = (args) => <Navbar {...args}/>

export const Primary = Template.bind({});
Primary.args = {}
