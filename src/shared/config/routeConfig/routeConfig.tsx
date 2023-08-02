import { AboutPage } from 'Page/AboutPage'
import { ArticlesDetailsPage } from 'Page/ArticlesDetailsPage'
import { ArticlesPage } from 'Page/ArticlesPage'
import { MainPage } from 'Page/MainPage'
import { NotFoundPage } from 'Page/NotFoundPage'
import { ProfilePage } from 'Page/ProfilePage'
import { RouteProps } from 'react-router-dom'


export type AppRouterProps = RouteProps & {
  authOnly?:boolean
}

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile',
  [RouteApp.ARTICLES]: '/articles',
  [RouteApp.ARTICLES_DETAILS]: '/articles/', // + id
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

  [RouteApp.ARTICLES]:{
    path: RoutePath.articles,
    element: <ArticlesPage/>,
    authOnly: true,
  },

  [RouteApp.ARTICLES_DETAILS]:{
    path: `${RoutePath.articles_details}:id`,
    element: <ArticlesDetailsPage/>,
    authOnly: true,
  },

  [RouteApp.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
}
