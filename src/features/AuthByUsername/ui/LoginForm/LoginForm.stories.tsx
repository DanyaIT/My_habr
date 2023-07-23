import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import  LoginForm  from "./LoginForm";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";


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
Primary.decorators = [StoreDecorator({
  LoginForm: {username: 'admin', password: '123', isLoading:false}
})]

export const withError = Template.bind({});
withError.args = {}
withError.decorators = [StoreDecorator({
  LoginForm: {username: 'admin', password: '123', error: 'error', isLoading: false}
})]

export const Loading = Template.bind({});
Loading.args = {}
Loading.decorators = [StoreDecorator({
  LoginForm: {username: 'admin', password: '123', isLoading: true}
})]