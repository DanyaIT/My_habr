

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreProvider } from 'app/providers/StoreProvider';
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";



export default {
   title: 'shared/Dropdown',
   component: Dropdown,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Dropdown>;

const Template: StoryFn <typeof Dropdown> = (args) => <Dropdown {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   items: [
      {
         content: 'content_1', disabled: false,
      },
      {
         content: 'content_2', disabled: true,
      },
      {
         content: 'content_3', disabled: false,
      },

   ],
   trigger: <Button>Menu</Button>
};



