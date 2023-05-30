import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher} from "./ThemeSwitcher";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn <typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args}/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Light.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]