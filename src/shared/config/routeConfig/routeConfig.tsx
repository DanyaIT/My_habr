import { AboutPage } from 'Page/AboutPage'
import { MainPage } from 'Page/MainPage'
import { NotFoundPage } from 'Page/NotFoundPage'
import { RouteProps } from 'react-router-dom'

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.NOT_FOUND]: '*',
}

export const RouteConfig: Record<RouteApp, RouteProps> = {
  [RouteApp.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },

  [RouteApp.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },

  [RouteApp.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
}
