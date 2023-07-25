import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import type { StateSchema, ReduxStoreWithManager,ThunkConfig} from "./config/StateSchema";
import { useAppDispatch } from "./hooks/useAppDispatch";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    useAppDispatch,
    ReduxStoreWithManager,
    ThunkConfig
}