
import { ListBox } from "./ListBox";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/ListBox',
   component: ListBox,
   decorators: [(Story) => <div style={{padding:100}}><Story/></div>, ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },

   },
} as Meta<typeof ListBox>;

const Template: StoryFn <typeof ListBox> = (args) => <ListBox {...args} />

export const bottomRight = Template.bind({});

bottomRight.args = {
   direction: 'bottom right',
   value: 'content',
   items: [
      {
         value: '1', content: 'content_1'
      },
      {
         value: '2', content: 'content_2'
      },
   ]
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
   direction: 'bottom left',
   value: 'content',
   items: [
      {
         value: '1', content: 'content_1'
      },
      {
         value: '2', content: 'content_2'
      },
   ]
};

export const TopLeft = Template.bind({});
TopLeft.args = {
   direction: 'top left',
   value: 'content',
   items: [
      {
         value: '1', content: 'content_1'
      },
      {
         value: '2', content: 'content_2'
      },
   ]
};

export const TopRight = Template.bind({});
TopRight.args = {
   direction: 'top right',
   value: 'content',
   items: [
      {
         value: '1', content: 'content_1'
      },
      {
         value: '2', content: 'content_2'
      },
   ]
};




