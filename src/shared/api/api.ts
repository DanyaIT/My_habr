import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/const";



export const $api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    }
});