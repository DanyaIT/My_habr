
import { Tabs } from './Tabs';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {action} from '@storybook/addon-actions'
import { ArticleType } from 'entities/Article';

export default {
   title: 'shared/Tabs',
   component: Tabs,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Tabs>;

const Template: StoryFn <typeof Tabs> = (args) => <Tabs {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   tabs: [
      {
         content: '1',
         value: ArticleType.ALL,
      },
      {
         content: '2',
         value: ArticleType.IT,
      },
      {
         content: '3',
         value: ArticleType.SCIENCE,
      },
      {
         content: '4',
         value: ArticleType.POLITICS,
      },
   ],
   value: '2',
   onChangeTab: action('onChangeTab')
};



