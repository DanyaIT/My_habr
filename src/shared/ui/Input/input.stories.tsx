import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Input } from "./Input";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "shared/Input",
  component: Input,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Input>;

const Template: StoryFn <typeof Input> = (args) => <Input {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Type text",
    value: '123',

}