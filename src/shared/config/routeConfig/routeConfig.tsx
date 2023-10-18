import { AboutPage } from 'Page/AboutPage'
import { AdminPanelPage } from 'Page/AdminPanelPage'
import { ArticlesDetailsPage } from 'Page/ArticlesDetailsPage'
import ArticlesEditPage from 'Page/ArticlesEditPage/ui/ArticlesEditPage/ArticlesEditPage'
import { ArticlesPage } from 'Page/ArticlesPage'
import { ForbiddenPage } from 'Page/ForbiddenPage'
import { MainPage } from 'Page/MainPage'
import { NotFoundPage } from 'Page/NotFoundPage'
import { ProfilePage } from 'Page/ProfilePage'
import { UserRole } from 'entities/User'
import { RouteProps } from 'react-router-dom'


export type AppRouterProps = RouteProps & {
  authOnly?:boolean
  roles?: UserRole[],
}

export enum RouteApp {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_CREATE = 'artilcle_create',
  ARTICLES_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  //--------------------------
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<RouteApp, string> = {
  [RouteApp.MAIN]: '/',
  [RouteApp.ABOUT]: '/about',
  [RouteApp.PROFILE]: '/profile/', // + id
  [RouteApp.ARTICLES]: '/articles',
  [RouteApp.ARTICLES_DETAILS]: '/articles/', // + id
  [RouteApp.ARTICLES_CREATE]: '/articles/new',
  [RouteApp.ARTICLES_EDIT]: '/articles/:id/edit',
  [RouteApp.ADMIN_PANEL]: '/admin',
  [RouteApp.FORBIDDEN]: '/forbidden',
  //---------------------------------------------  
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
    path: `${RoutePath.profile}:id`,
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

  [RouteApp.ARTICLES_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticlesEditPage/>,
    authOnly: true,
  },

  [RouteApp.ARTICLES_CREATE]: {
    path: RoutePath.artilcle_create,
    element: <ArticlesEditPage/>,
    authOnly: true, 
  },

  [RouteApp.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage/>,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },

  //---------------------------------------------

  [RouteApp.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage/>
  },

  [RouteApp.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
}
