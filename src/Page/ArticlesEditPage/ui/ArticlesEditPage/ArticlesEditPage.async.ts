import { lazy } from "react";



export const ArticlesEditPageAsync = lazy(async () => await new Promise(resolve => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./ArticlesEditPage'))
    }, 500)
}))