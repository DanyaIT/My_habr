import { AboutPage } from "Page/AboutPage"
import { MainPage } from "Page/MainPage"
import { RouteProps } from "react-router-dom"



export enum RouteApp {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routePath: Record<RouteApp, string> = {
    [RouteApp.MAIN] : '/',
    [RouteApp.ABOUT] : '/about',
}


export const routeConfig: Record<RouteApp, RouteProps> = {
    [RouteApp.MAIN] : {
        path: routePath.main,
        element: <MainPage/>
    },

    [RouteApp.ABOUT] : {
        path: routePath.about,
        element: <AboutPage/>
    }
}