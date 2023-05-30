import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Loader} from "./Loader";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "shared/Loader",
  component: Loader,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Loader>;

const Template: StoryFn <typeof Loader> = (args) => <Loader {...args}/>

export const Light = Template.bind({});
Light.args = {

}
export const Dark = Template.bind({});
Light.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]