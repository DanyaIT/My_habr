import { lazy } from "react";

export const ProfilePageAsync = lazy(async () => new Promise(resolve => {
    setTimeout(()=> {

        //@ts-ignore
        resolve(import('./ProfilePage'))
    }, 1500)
}))