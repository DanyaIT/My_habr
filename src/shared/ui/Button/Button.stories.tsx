import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, SizeButton, ThemeButton } from "./Button";
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: "Text",
    theme: ThemeButton.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE
}

export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.M,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND
}

export const BackgroundThemeInverted = Template.bind({})
BackgroundThemeInverted.args = {
    children: "Text",
    theme: ThemeButton.BACKGROUND_INVERTED
}

export const Square = Template.bind({})

Square.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
}


export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL
}

export const Disabled = Template.bind({})
Disabled.args = {
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true,
    children: '>'
}


OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]