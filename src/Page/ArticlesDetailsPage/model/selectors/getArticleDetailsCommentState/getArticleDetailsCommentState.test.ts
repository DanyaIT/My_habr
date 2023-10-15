
import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getArticleDetailsCommentError, getArticleDetailsCommentIsloading } from "./getArticleDetailsCommentState"


describe('getArticleDetailsCommentIsloading', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage:{
                comments: {
                    isLoading: true,
                    ids: [],
                    entities: {},
                },
                recomendations:{
                    ids: [],
                    entities: {},
                }
            }
            
        }
        expect(getArticleDetailsCommentIsloading(state as StateSchema)).toEqual(true)
    })

    test('With empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage:{
                comments:{
                    ids: [],
                    entities: {},
                },
                recomendations:{
                    ids: [],
                    entities: {},
                }
            }
        }
        expect(getArticleDetailsCommentIsloading(state as StateSchema)).toEqual(undefined)
    })

})

describe('getArticleDetailsCommentError', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage:{
                comments:{
                    error: 'error',
                    ids: [],
                    entities: {},
                },
                recomendations:{
                    ids: [],
                    entities: {},
                }
            }
        }
        expect(getArticleDetailsCommentError(state as StateSchema)).toEqual('error')
    })

    test('With empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage:{
                comments: {
                    ids: [],
                    entities: {},
                },
                recomendations:{
                    ids: [],
                    entities: {},
                }
            }
        }
        expect(getArticleDetailsCommentError(state as StateSchema)).toEqual(undefined)
    })

})