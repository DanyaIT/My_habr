import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country/model/types/countrySelect"
import { Currency } from "entities/Currency"
import { getProfileDataForm } from "./getProfileDataForm"



describe('getProfileDataForm', () => {
    test('With state', () => {
        const data = {
            first: "Danya",
            lastname: "Ocheretin",
            age: 24,
            currency: Currency.EUR,
            city: "ASDdsf",
            username: "Adsf",
            country: Country.Armenia,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form:data
            }
        }
        expect(getProfileDataForm(state as StateSchema)).toEqual(data)
    })

    test('Empty state', () => {
        const data = {}
        const state: DeepPartial<StateSchema> = {
            profile: {
                form:data
            }
        }
        expect(getProfileDataForm(state as StateSchema)).toEqual({})
    })
})