import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from 'entities/User';



export function createReduxStore(initialState?: StateSchema){

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

}