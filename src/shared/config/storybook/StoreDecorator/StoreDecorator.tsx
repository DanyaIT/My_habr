import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { LoginReducer } from 'features/AuthByUsername';


const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>> = {
    LoginForm: LoginReducer,
}

export const StoreDecorator = (
    state:DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    
    ) => (StoryComponent: StoryFn) => (
    <StoreProvider 
    initialState = {state}
    asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
        <StoryComponent/>
    </StoreProvider>
)