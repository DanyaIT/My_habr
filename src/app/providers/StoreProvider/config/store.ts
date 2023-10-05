import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { CombinedState, DeepPartial, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { scrollReducer } from 'features/ScrollSave';




export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) {

    const rootReducer: ReducersMapObject = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk:{
                extraArgument:{
                    api: $api
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

