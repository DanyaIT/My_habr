import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsCommentSchema } from 'Page/ArticlesDetailsPage';
import { ArticlePageSchema } from 'Page/ArticlesPage';
import { ProfileShema } from 'Page/ProfilePage';
import { AxiosInstance } from 'axios';
import { ArticleDetailsShema } from 'entities/Article';
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from "features/AuthByUsername";
import { NavigateOptions, To } from 'react-router-dom';


export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    
    // Асинхронные reducers
    profile?: ProfileShema,
    loginForm?: LoginSchema,
    articlePage?: ArticlePageSchema;
    articleDetails?: ArticleDetailsShema,
    articleDetailsComments?: ArticleDetailsCommentSchema;
    addCommentForm?: AddCommentFormSchema;

}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add:(key: StateSchemaKey, reducer: Reducer) => void,  
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager,
}
export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArgs {
    api:AxiosInstance,
    navigate?:(to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue:T,
    extra: ThunkExtraArgs,
    state: StateSchema
}