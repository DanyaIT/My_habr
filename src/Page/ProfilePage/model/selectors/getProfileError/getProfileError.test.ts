import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getProfileError } from "./getProfileError"




describe('getProfileError', () => {
    test('With Error', () => {
        const error = 'error'
        const state: DeepPartial<StateSchema> = {
            profile: {
                error
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual(error)
    })

    test('Empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })

})