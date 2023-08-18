import { lazy } from "react";


export const AddCommentFormAsync = lazy(async() => new Promise(resolve => {
    setTimeout(()=> {
        //@ts-ignore
        resolve(import('./AddCommentForm'))
    }, 500)
}))