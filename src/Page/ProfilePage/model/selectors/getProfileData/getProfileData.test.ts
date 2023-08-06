
import { Profile } from "../../types/profile"
import { Country } from "entities/Country/model/types/countrySelect"
import { Currency } from "entities/Currency"
import { getProfileData } from "./getProfileData"
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { profile } from "console"


describe('getProfileData', () => {
    test('State', () => {
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
            profile:{
                data
            }
        }
          
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test("Empty state", () => {
       const data = {}
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual({})
    })
})