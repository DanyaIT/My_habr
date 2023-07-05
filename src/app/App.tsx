
import './styles/index.scss'
import {useState} from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { SideBar } from 'widgets/SideBar'
import { Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui/Button/Button'



const App = () => {
  const { theme } = useTheme()

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
