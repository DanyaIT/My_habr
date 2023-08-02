
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInitData, userActions } from 'entities/User'




const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const init = useSelector(getUserInitData)

  useEffect(() => {
    dispatch(userActions.initAuthDate())
  }, [dispatch])

  return (
  <div className={classNames('app', {}, [theme])}>
    <Suspense fallback=''>
      <Navbar />
      <div className='content-page'>
        <SideBar />
        {init && <AppRouter />}
      </div>
    </Suspense>
  </div>

  )
}

export default App
