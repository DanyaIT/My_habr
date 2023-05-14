import React, { Suspense, useState, useContext } from 'react'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { Routes, Route, Link } from 'react-router-dom'

import { AboutPageAsync } from './Page/AboutPage/AboutPage.async'
import { MainPageAsync } from './Page/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'





const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className= {classNames('app', {hover:true}, [theme, 'cl1'])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>dfgdf</button>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  )
}

export default App