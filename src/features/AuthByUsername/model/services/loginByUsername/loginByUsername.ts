
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/const';


interface LoginByUsernameProps {
    username: string,
    password: string,
}


export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, ThunkApi) => {
    const {rejectWithValue, dispatch, extra} = ThunkApi 

        try {
           
            const response = await extra.api.post<User>('/login', authData);
  
            if (!response.data) {
                throw new Error()
            }
            
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
        


            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)