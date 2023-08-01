
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country/model/type";
import { Currency } from "entities/Currency";

export default {
  title: "Page/ProfilePage",
  component: ProfilePage,
  decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof ProfilePage>;

const Template: StoryFn <typeof ProfilePage> = (args) => <ProfilePage/>

export const Light = Template.bind({});
Light.args = {}
Light.decorators = [StoreDecorator({
  profile: {
    data: {
        first: "Danya",
        lastname: "Ocheretin",
        age: 24,
        currency: Currency.EUR,
        city: "ASDdsf",
        username: "Adsf",
        country: Country.Armenia,
    }
  }
})]

export const Dark = Template.bind({});
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({profile: {
  data: {
      first: "Danya",
      lastname: "Ocheretin",
      age: 24,
      currency: Currency.EUR,
      city: "ASDdsf",
      username: "Adsf",
      country: Country.Armenia,
  }
}})]