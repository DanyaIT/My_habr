
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'


const App = () => {
  const { theme } = useTheme()



  return (<div className={classNames('app', {}, [theme, 'cl1'])}>
    <Suspense fallback={<PageLoader/>}>
      <Navbar />
      <div className='content-page'>
        <SideBar />
        <AppRouter />
      </div>
    </Suspense>
  </div>

  )
}

export default App
