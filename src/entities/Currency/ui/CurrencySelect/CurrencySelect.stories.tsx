import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CurrencySelect } from "./CurrencySelect";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof CurrencySelect>;

const Template: StoryFn <typeof CurrencySelect> = (args) => <CurrencySelect {...args}/>

export const Primary = Template.bind({});
Primary.args = {

}

export const Dark = Template.bind({});
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]