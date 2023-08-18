

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";


const initialState: AddCommentFormSchema = {
    error: undefined,
    text: '',
}

export const AddCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action:PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})


export const {reducer:addCommentFormReducer } = AddCommentFormSlice
export const {actions:addCommentFormAction } = AddCommentFormSlice
