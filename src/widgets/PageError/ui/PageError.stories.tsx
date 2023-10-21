
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {PageError} from './PageError';
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
  title: "widgets/PageError",
  component: PageError,
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof PageError>;

const Template: StoryFn <typeof PageError> = (args) => <PageError {...args}/>

export const Primary = Template.bind({});
Primary.args = {
}
