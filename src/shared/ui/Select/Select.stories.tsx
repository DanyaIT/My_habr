import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Select} from "./Select";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "shared/Select",
  component: Select,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Select>;

const Template: StoryFn <typeof Select> = (args) => <Select {...args}/>

export const Light = Template.bind({});
Light.args = {
    label: 'Выберете значение',
    options: [
      {
        value: "1",
        content:'Первый пункт'
      },
      {
        value: "2",
        content:'Второй пункт'
      }
    ]
}

export const Dark = Template.bind({});
Dark.args = {
    label: 'Выберете значение',
    options: [
      {
        value: "1",
        content:'Первый пункт'
      },
      {
        value: "2",
        content:'Второй пункт'
      }
    ]
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]