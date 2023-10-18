
import  ForbiddenPage  from './ForbiddenPage';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'shared/ForbiddenPage',
   component: ForbiddenPage,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn <typeof ForbiddenPage> = (args) => <ForbiddenPage {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



