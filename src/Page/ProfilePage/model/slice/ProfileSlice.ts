import { createSlice } from "@reduxjs/toolkit";
import { ProfileShema } from "../types/profile";



const initialState:ProfileShema =  {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}


const ProfileSlice = createSlice({
    name:'profile',
    initialState,
    reducers: {

    }
})

export const {reducer: profileReducer} = ProfileSlice
export const {actions: profileAction} = ProfileSlice


