import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SideBar} from "./SideBar";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";


export default {
  title: "widgets/SideBar",
  component: SideBar,
  decorators:[ThemeDecorator(Theme.NORMAL), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof SideBar>;

const Template: StoryFn <typeof SideBar> = (args) => <SideBar {...args}/>


export const Light = Template.bind({});
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.NORMAL)]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]