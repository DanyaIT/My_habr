
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
  title: "Page/ProfilePage",
  component: ProfilePage,
  decorators: [ThemeDecorator(Theme.NORMAL),RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof ProfilePage>;

const Template: StoryFn <typeof ProfilePage> = (args) => <ProfilePage/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]