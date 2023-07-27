import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileShema } from "../types/profile";
import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";



const initialState:ProfileShema =  {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}


const ProfileSlice = createSlice({
    name:'profile',
    initialState,
    reducers: {},
    extraReducers: (bulder) => {
        bulder
        .addCase(fetchProfileData.pending, (state, action) => {
            state.error = undefined,
            state.isLoading = true
        })
        .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
            state.isLoading = false,
            state.data = action.payload
        })
        .addCase(fetchProfileData.rejected, (state,action) => {
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export const {reducer: profileReducer} = ProfileSlice
export const {actions: profileAction} = ProfileSlice


