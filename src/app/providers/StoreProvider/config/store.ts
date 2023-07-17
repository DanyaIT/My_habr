import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { userReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUsername';



export function createReduxStore(initialState?: StateSchema){

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        LoginForm: LoginReducer,

    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']