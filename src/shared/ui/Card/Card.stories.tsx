
import { Card } from './Card';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Text } from '../Text/Text';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';


export default {
   title: 'shared/Card',
   component: Card,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({}), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Card>;

const Template: StoryFn <typeof Card> = (args) => <Card {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   children: <Text title = 'title' text = 'text'/> 
};



