import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileDataForm } from "../../selectors/getProfileDataForm";





export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfielData',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi
        const formData = getProfileDataForm(getState())
        
        try {
            const response = await extra.api.put<Profile>('/profile', formData)
            if(!response) {
                throw new Error
            }
            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)

