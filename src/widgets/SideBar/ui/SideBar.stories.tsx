import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SideBar} from "./SideBar";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";


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
Light.decorators = [StoreDecorator({})]


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const isAuth = Template.bind({});
isAuth.args = {}
isAuth.decorators = [StoreDecorator({
  user: {
    authData: {id:'1', username: '123'},
  }
})]
