

import {Suspense, memo } from 'react'

import { Routes, Route } from 'react-router-dom'
import { AppRouterProps, RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'





const AppRouter = () => {

  const renderWithWrapper = (route: AppRouterProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
          {route.element}
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    )
  }
  
  return (
    <Routes>
      {Object.values(RouteConfig).map(renderWithWrapper)}
    </Routes>
  )
}

export default memo(AppRouter)
