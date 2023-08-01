import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Avatar} from "./Avatar";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import  AvatarImage  from "./Cibercrimen.jpg";


export default {
  title: "shared/Avatar",
  component: Avatar,
  decorators: [ThemeDecorator(Theme.NORMAL)],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn <typeof Avatar> = (args) => <Avatar {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    size:200,
    src: AvatarImage,
    
    
}

export const Small = Template.bind({});
Small.args = {
    size:150,
    src: AvatarImage,
    
}