import { counterReducer } from 'entities/Counter';
import { StateSchema, ReducerManager } from './StateSchema';
import { DeepPartial, ReducersMapObject, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { profileReducer } from 'Page/ProfilePage';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';




export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {

    const rootReducer: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk:{
                extraArgument:{
                    api: $api,
                    navigate: navigate,
                }
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

