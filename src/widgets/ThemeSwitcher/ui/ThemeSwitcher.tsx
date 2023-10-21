import { FC, ReactNode, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme_light.svg'
import DarkIcon from 'shared/assets/icons/theme_dark.svg'
import BlueIcon from 'shared/assets/icons/theme_blue.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const iconType: Record<Theme, React.SVGProps<SVGSVGElement>> = {
  [Theme["BLUE"]]: <BlueIcon />,
  [Theme["DARK"]]: <DarkIcon />,
  [Theme["NORMAL"]]: <LightIcon />,
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { toggleTheme, theme } = useTheme()
  

  return (
    <Button theme = {ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className || ''])}>
      {iconType[theme] as ReactNode}
    </Button>

  )
})
