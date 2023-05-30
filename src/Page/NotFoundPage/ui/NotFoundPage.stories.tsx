
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {NotFoundPage} from './NotFoundPage'
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
  title: "Page/NotFoundPage",
  component: NotFoundPage,
  decorators: [ThemeDecorator(Theme.NORMAL),RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof NotFoundPage>;

const Template: StoryFn <typeof NotFoundPage> = (args) => <NotFoundPage {...args}/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]