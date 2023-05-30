import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme} from "./AppLink";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";


export default {
  title: "shared/AppLink",
  component: AppLink,
  decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof AppLink>;

const Template: StoryFn <typeof AppLink> = (args) => <AppLink {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children : 'text'
}

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children : 'text'
}

export const Red = Template.bind({});
Red.args = {
    theme: AppLinkTheme.RED,
    children : 'text'
}

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
    theme: AppLinkTheme.PRIMARY,
    children : 'text',
}
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children : 'text'
}
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkRed = Template.bind({});
DarkRed.args = {
    theme: AppLinkTheme.RED,
    children : 'text'
}
DarkRed.decorators = [ThemeDecorator(Theme.DARK)]
