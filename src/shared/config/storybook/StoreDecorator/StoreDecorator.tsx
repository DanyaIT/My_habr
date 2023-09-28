import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { articleDetailsPageReducer } from 'Page/ArticlesDetailsPage';

import { profileReducer } from 'Page/ProfilePage';
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentSlice';
import { LoginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';


const defaultAsyncReducers:ReducersList = {
    loginForm: LoginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
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