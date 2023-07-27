import axios from "axios"
import { loginByUsername } from "./loginByUsername";
import { StateSchema } from "app/providers/StoreProvider";
import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/TestAsuncThunk/TestAsuncThunk";


// describe('loginByUsername.test', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;

//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     })

//     test('sucess login', async () => {
//         const userData = { username: '123', id: '1' }
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
//         const action = loginByUsername({ username: '123', password: '123' })
//         const result = await action(dispatch, getState, undefined)

//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toEqual(userData)
//     })

//     test('error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
//         const action = loginByUsername({ username: '123', password: '123' })
//         const result = await action(dispatch, getState, undefined)

//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected')
//         expect(result.payload).toEqual('error')
//     })



describe('loginByUsername.test', () => {

    test('sucess login', async () => {
        const userData = { username: '123', id: '1' }
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))
        const result = await thunk.callThunk({ username: '123', password: '123' })
       
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))

        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})