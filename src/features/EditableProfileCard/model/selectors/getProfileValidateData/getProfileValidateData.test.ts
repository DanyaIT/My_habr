import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getProfileValidateData } from "./getProfileValidateData"
import { ValidateProfileData } from "../../types/profile"

describe('getProfileValidateData', () => {
    test('With state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileData.INCORRECT_AGE, ValidateProfileData.INCORRECT_CITY]
            }
        }
        expect(getProfileValidateData(state as StateSchema)).toEqual([ValidateProfileData.INCORRECT_AGE, ValidateProfileData.INCORRECT_CITY])
    })

    test('Empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateData(state as StateSchema)).toEqual(undefined)
    })

})