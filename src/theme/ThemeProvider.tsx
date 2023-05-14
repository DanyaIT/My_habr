import React, {useState,useMemo, FC} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

const ThemeProvider:FC = ({children}) => {

const [theme, setTheme] = useState<Theme>(defaultTheme)

const defaultProps = useMemo(()=>({
    theme,
    setTheme
}), [theme])

  return (
    <div>
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider