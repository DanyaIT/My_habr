
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import  AboutPage  from './AboutPage'
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "Page/AboutPage",
  component: AboutPage,
  decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof AboutPage>;

const Template: StoryFn <typeof AboutPage> = (args) => <AboutPage/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]