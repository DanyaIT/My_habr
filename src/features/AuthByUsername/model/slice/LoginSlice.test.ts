import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { LoginSchema } from "../types/LoginSchema"
import { LoginActions, LoginReducer } from "./LoginSlice"


describe('LoginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'Danya',
        }
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('Danya'))).toEqual({username: 'Danya'})
    })

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        }
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123'))).toEqual({password: '123'})
    })

})