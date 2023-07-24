import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginLoading } from "./getLoginLoading"


describe('getLoginLoading.test', () => {
    test('with true loading', () => {
        const state: DeepPartial<StateSchema> = {
            //@ts-ignore
            LoginForm: {
                isLoading: true,
            }
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})