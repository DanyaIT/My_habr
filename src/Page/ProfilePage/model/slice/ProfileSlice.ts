import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileShema } from "../types/profile";
import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";


const initialState: ProfileShema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined,
}


const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },

        resetProfile: (state) => {
            state.readonly = true,
            state.form = state.data
            state.validateError = undefined
        },

        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.validateError = undefined
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers: (bulder) => {
        bulder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })


            .addCase(updateProfileData.pending, (state, action) => {
                state.isLoading = true
                state.validateError = undefined
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.readonly = true
                state.validateError = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateError = action.payload
            })

    }
})

export const { reducer: profileReducer } = ProfileSlice
export const { actions: profileAction } = ProfileSlice


