import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getLoginUsername } from "./getLoginUsername"
import { DeepPartial } from "@reduxjs/toolkit"


describe('getLoginPassword.test', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Danya',
                password: '123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('Danya')
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})