import { AboutPage } from 'Page/AboutPage'
import { MainPage } from 'Page/MainPage'
import { NotFoundPage } from 'Page/NotFoundPage'
import { ProfilePage } from 'Page/ProfilePage'
import { RouteProps } from 'react-router-dom'


type AppRouterProps = RouteProps & {
  authOnly?:boolean
}

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile'
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile',
  [RouteApp.NOT_FOUND]: '*',
}

export const RouteConfig: Record<RouteApp, AppRouterProps> = {
  [RouteApp.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },

  [RouteApp.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },

  [RouteApp.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage/>,
    authOnly: true,
  },

  [RouteApp.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
}
