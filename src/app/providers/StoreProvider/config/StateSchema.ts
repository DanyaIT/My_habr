import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsPageShema } from 'Page/ArticlesDetailsPage/model/types';
import { ArticlePageSchema } from 'Page/ArticlesPage';
import { ProfileShema } from 'Page/ProfilePage';
import { AxiosInstance } from 'axios';
import { ArticleDetailsShema } from 'entities/Article';
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from "features/AuthByUsername";
import { ScrollShema } from 'features/ScrollSave';



export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: ScrollShema,
    
    // Асинхронные reducers
    profile?: ProfileShema,
    loginForm?: LoginSchema,
    articlePage?: ArticlePageSchema;
    articleDetails?: ArticleDetailsShema,
    articleDetailsPage?: ArticleDetailsPageShema;
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

}

export interface ThunkConfig<T> {
    rejectValue:T,
    extra: ThunkExtraArgs,
    state: StateSchema
}