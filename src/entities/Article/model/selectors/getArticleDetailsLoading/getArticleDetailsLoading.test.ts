import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getArticleDetailsLoading } from "./getArticleDetailsLoading"


describe('getArticleDetailsLoading', () => {
    test('With error', ()=> {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
     expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
    }) 

    test('With emty state', () => {
        const state:DeepPartial<StateSchema> = {}
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined)
    })
})
