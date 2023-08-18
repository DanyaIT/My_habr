import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getArticleDetailsCommentError, getArticleDetailsCommentIsloading } from "./getArticleDetailsCommentState"


describe('getArticleDetailsCommentIsloading', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments:{
                isLoading: true,
                ids: [],
                entities: {},
            }
        }
        expect(getArticleDetailsCommentIsloading(state as StateSchema)).toEqual(true)
    })

    test('With empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments:{
                ids: [],
                entities: {},
            }
        }
        expect(getArticleDetailsCommentIsloading(state as StateSchema)).toEqual(undefined)
    })

})

describe('getArticleDetailsCommentError', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments:{
                error: 'error',
                ids: [],
                entities: {},
            }
        }
        expect(getArticleDetailsCommentError(state as StateSchema)).toEqual('error')
    })

    test('With empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments:{
                ids: [],
                entities: {},
            }
        }
        expect(getArticleDetailsCommentError(state as StateSchema)).toEqual(undefined)
    })

})