import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";


export default {
  title: "shared/Modal",
  component: Modal,
  decorators: [ThemeDecorator(Theme.NORMAL), StoreDecorator({})],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Modal>;

const Template: StoryFn <typeof Modal> = (args) => <Modal {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    children: "Если у вас ничего не работает, сделайте это, измените версию но сначала удалите зависимость react-router-dom: 6.something из папки package.json, а затем Удалите предыдущую версию- npm uninstall react-router-dom 2. Установите более старую версию-npm install react-router-dom@5.0.0",
    isOpen: true
}

export const Dark = Template.bind({});
Dark.args = {
    children: "Если у вас ничего не работает, сделайте это, измените версию но сначала удалите зависимость react-router-dom: 6.something из папки package.json, а затем Удалите предыдущую версию- npm uninstall react-router-dom 2. Установите более старую версию-npm install react-router-dom@5.0.0",
    isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]