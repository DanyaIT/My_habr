
import { ArticleSortSelectors } from './ArticleSortSelectors';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'features/ArticleSortSelectors',
   component: ArticleSortSelectors,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleSortSelectors>;

const Template: StoryFn <typeof ArticleSortSelectors> = (args) => <ArticleSortSelectors {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



