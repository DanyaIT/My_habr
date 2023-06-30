
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'


const AppRouter = () => {
  return (
    <div className='page-wrapper'>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {Object.values(RouteConfig).map(({ element, path }) =>
            <Route path={path} element={element} key={path} />
          )}
        </Routes>
      </Suspense>
    </div>
  )
}

export default AppRouter
