import { StateSchema } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"
import { DeepPartial } from "@reduxjs/toolkit"



describe('getLoginPassword.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Danya',
                password: '123',
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})