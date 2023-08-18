import { DeepPartial } from "@reduxjs/toolkit"
import { AddCommentFormSchema } from "../../types/addCommentForm"
import { StateSchema } from "app/providers/StoreProvider"
import { getAddCommentFormError, getAddCommentFormText } from "./getAddCommentFromState"


describe('getAddCommentFormError', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm:{
                error:'error'
            }
        }
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
    })

    test('With empty state', () => {
        const state: DeepPartial<AddCommentFormSchema> = {}
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined)
    })
})

describe('getAddCommentFormText', () => {
    test('With State', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm:{
                text:'text'
            }
        }
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text')
    })

    test('With empty state', () => {
        const state: DeepPartial<AddCommentFormSchema> = {}
        expect(getAddCommentFormText(state as StateSchema)).toEqual('')
    })
})