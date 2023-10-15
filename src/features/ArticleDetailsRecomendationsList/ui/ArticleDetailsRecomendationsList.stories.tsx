
import { ArticleDetailsRecomendationsList } from './ArticleDetailsRecomendationsList';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";


export default {
   title: 'features/ArticleDetailsRecomendationsList',
   component: ArticleDetailsRecomendationsList,
   decorators: [ThemeDecorator(Theme.NORMAL)],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleDetailsRecomendationsList>;

const Template: StoryFn <typeof ArticleDetailsRecomendationsList> = (args) => <ArticleDetailsRecomendationsList {...args}/>

export const Normal = Template.bind({});
Normal.args = {

};



