
import { getUserAuthData } from 'entities/User'
import React, { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { AppRouterProps, RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'





const AppRouter = () => {

  
  const renderWithWrapper = (route: AppRouterProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className='page-wrapper'>
          {route.element}
        </div>
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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
