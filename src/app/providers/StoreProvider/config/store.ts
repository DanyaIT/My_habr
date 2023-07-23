import { counterReducer } from 'entities/Counter';
import { StateSchema, ReducerManager } from './StateSchema';
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
;



export function createReduxStore(initialState?: StateSchema){

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

