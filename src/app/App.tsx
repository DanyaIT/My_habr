
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'




const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthDate())
  }, [dispatch])

  return (
  <div className={classNames('app', {}, [theme])}>
    <Suspense fallback=''>
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
