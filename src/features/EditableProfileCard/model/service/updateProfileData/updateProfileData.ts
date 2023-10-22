import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileDataForm } from "../../selectors/getProfileDataForm/getProfileDataForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileData } from "../../const/ValidateProfileData";





export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileData []>>(
    'profile/updateProfielData',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi
        const formData = getProfileDataForm(getState())

        const validateDate = validateProfileData(formData)
        if(validateDate.length) {
            return rejectWithValue(validateDate)
        }
        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)
            if(!response.data){
                throw new Error();
            }
            return response.data
        } catch (error) {
            return rejectWithValue([ValidateProfileData.INCORRECT_SERVER])
        }
    }
)

