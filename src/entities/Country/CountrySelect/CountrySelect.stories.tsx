import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CountrySelect } from "./CountrySelect";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "entities/CountrySelect",
  component: CountrySelect,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof CountrySelect>;

const Template: StoryFn <typeof CountrySelect> = (args) => <CountrySelect {...args}/>

export const Primary = Template.bind({});
Primary.args = {

}

export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]