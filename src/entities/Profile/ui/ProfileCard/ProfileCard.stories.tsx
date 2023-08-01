import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";
import { Meta, StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country/model/type";
import AvatarImg from '../../../../shared/assets/tests/Storybook.jpg'





export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    decorators: [ThemeDecorator(Theme.NORMAL)],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        first: "Danya",
        lastname: "Ocheretin",
        age: 24,
        currency: Currency.EUR,
        city: "ASDdsf",
        username: "Adsf",
        country: Country.Armenia,
        avatar: `${AvatarImg}`,
    }
}

export const WithError = Template.bind({})
WithError.args = {
    error: 'error',
}

export const isLoading = Template.bind({})
isLoading.args = {
    isLoading: true,
}