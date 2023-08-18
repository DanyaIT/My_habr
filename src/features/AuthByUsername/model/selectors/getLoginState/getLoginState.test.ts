import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginState } from "./getLoginState"


describe('getLoginState.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Danya',
                password: '123',
                isLoading: true,
                error: 'error',

            }
        }
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'Danya',
            password: '123',
            isLoading: true,
            error: 'error',
        })
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginState(state as StateSchema)).toEqual(undefined)
    })
})