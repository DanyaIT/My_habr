import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, ThemeButton } from "./Button";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "shared/Button",
  component: Button,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

const Template: StoryFn <typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    children: "Text"
}

export const Clear = Template.bind({})
Clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE
}



OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]