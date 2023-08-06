import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getArticleDetailsError } from "./getArticleDetailsError"




describe('getArticleDetailsError', () => {
    test('With error', ()=> {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }
     expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    }) 

    test('With emty state', () => {
        const state:DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
