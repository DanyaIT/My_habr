
import  AddCommentForm  from './AddCommentForm';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import {action} from '@storybook/addon-actions'

export default {
   title: 'features/AddCommentForm',
   component: AddCommentForm,
   decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof AddCommentForm>;

const Template: StoryFn <typeof AddCommentForm> = (args) => <AddCommentForm {...args}/>

export const Normal = Template.bind({});
Normal.args = {
   onSendTextValue: action('onSendTextValue')
};

Normal.decorators = [StoreDecorator({})]

