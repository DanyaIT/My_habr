
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollShema } from "../type/ScrollSchema";


const initialState:ScrollShema = {
    scroll: {},
}


export const ScrollSlice = createSlice({
    name:'ScrollSlice',
    initialState,
    reducers:{
        setScrollPosition: (state, {payload}:PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position
        }
    }

})

export const {reducer: scrollReducer } = ScrollSlice
export const {actions: scrollAction} = ScrollSlice