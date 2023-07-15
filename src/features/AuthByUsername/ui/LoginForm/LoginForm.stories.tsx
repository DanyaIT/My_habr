import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { LoginForm } from "./LoginForm";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "features/LoginForm",
  component: LoginForm,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof LoginForm>;

const Template: StoryFn <typeof LoginForm> = (args) => <LoginForm {...args}/>

export const Primary = Template.bind({});
Primary.args = {}