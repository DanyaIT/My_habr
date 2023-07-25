import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileShema } from 'Page/ProfilePage';
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";


export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    
    // Асинхронные reducers
    profile?: ProfileShema,
    LoginForm?: LoginSchema,
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

