
import { Flex } from './Flex';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn, Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


export default {
   title: 'shared/Flex',
   component: Flex,
   decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({});
Row.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   )
};

export const Column = Template.bind({})

export const RowWithGap16 = Template.bind({})

RowWithGap16.args = {
   gap: '16',
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   )
}


Column.args = {
   direction: 'column',
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   )
}

export const ColumnWithGap32 = Template.bind({})

ColumnWithGap32.args = {
   gap: '32',
   direction: 'column',
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   )
}

