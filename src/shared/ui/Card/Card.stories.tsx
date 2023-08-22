
import { Card } from './Card';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Text } from '../Text/Text';


export default {
   title: 'shared/Card',
   component: Card,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Card>;

const Template: StoryFn <typeof Card> = (args) => <Card {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   children: <Text title = 'title' text = 'text'/> 
};



