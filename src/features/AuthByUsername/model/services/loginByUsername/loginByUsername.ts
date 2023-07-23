import { LOCAL_STORAGE_THEME_KEY } from './../../../../../app/providers/ThemeProvider/lib/ThemeContext';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/const';



interface LoginByUsernameProps {
    username: string,
    password: string,
}


export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error()
            }
            
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            thunkApi.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue('error')
        }
    }
)