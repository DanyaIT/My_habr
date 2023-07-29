
import { getUserAuthData } from 'entities/User'
import React, { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'





const AppRouter = () => {

  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(RouteConfig).filter(route => {
      if(route.authOnly && !isAuth){
        return false
      }
      return true
    })
  }, [isAuth])

  return (
    <div className='page-wrapper'>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {routes.map(({ element, path }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default memo(AppRouter)
