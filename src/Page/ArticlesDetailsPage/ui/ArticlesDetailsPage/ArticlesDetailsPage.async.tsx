import { lazy } from 'react'



export const ArticlesDetailsPageAsync = lazy(async() => await new Promise(resolve => {
    setTimeout(() => {
    //@ts-ignore
    resolve(import('./ArticlesDetailsPage'))
    }, 0)
}))



