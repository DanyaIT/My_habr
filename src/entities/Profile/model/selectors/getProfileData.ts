import { StateSchema } from "app/providers/StoreProvider";
import { ProfileShema } from "../types/profile";


export const getProfileData = (state:StateSchema) => state?.profile?.data; 