import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { profileReducer } from 'Page/ProfilePage';
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from 'entities/Article';
import { LoginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';


const defaultAsyncReducers:ReducersList = {
    LoginForm: LoginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
}

export const StoreDecorator = (
    state:DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
    ) => (StoryComponent: StoryFn) => (
        
    <StoreProvider 
    initialState = {state}
    asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
)