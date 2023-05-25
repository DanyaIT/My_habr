import { AboutPage } from 'Page/AboutPage'
import { MainPage } from 'Page/MainPage'
import { NotFoundPage } from 'Page/NotFoundPage'
import { RouteProps } from 'react-router-dom'

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteApp, RouteProps> = {
  [RouteApp.MAIN]: {
    path: routePath.main,
    element: <MainPage/>
  },

  [RouteApp.ABOUT]: {
    path: routePath.about,
    element: <AboutPage/>
  },

  [RouteApp.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage/>
  }
}
