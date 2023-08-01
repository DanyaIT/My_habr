import { StateSchema } from "app/providers/StoreProvider";


export const getProfileDataForm = (state: StateSchema) => state.profile?.form;