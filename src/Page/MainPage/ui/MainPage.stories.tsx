
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
  title: "Page/MainPage",
  component: MainPage,
  decorators: [ThemeDecorator(Theme.NORMAL),RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof MainPage>;

const Template: StoryFn <typeof MainPage> = (args) => <MainPage/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]