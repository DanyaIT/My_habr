import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextTheme} from "./Text";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "shared/Text",
  component: Text,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Text>;

const Template: StoryFn <typeof Text> = (args) => <Text {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    text :'Text for MainPage',
    title :'Title for MainPage'
}

export const Error = Template.bind({});
Error.args = {
    text :'Text for MainPage',
    title :'Title for MainPage',
    theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title :'Title for MainPage'
}

export const OnlyText = Template.bind({});
OnlyText.args = {
    text :'Text for MainPage',
}

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text :'Text for MainPage',
    title :'Title for MainPage'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title :'Title for MainPage'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text :'Text for MainPage'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]