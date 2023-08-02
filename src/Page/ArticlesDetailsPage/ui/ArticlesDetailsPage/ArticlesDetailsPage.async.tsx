import { lazy } from 'react'
import { render } from "@testing-library/react"


export const ArticlesDetailsPageAsync = lazy(async() => await new Promise(resolve => {
    setTimeout(() => {
    //@ts-ignore
    resolve(import('./ArticlesDetailsPage'))
    }, 1500)
}))



