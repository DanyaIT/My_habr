
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const {
    className
  } = props
  const dispatch = useDispatch()
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)
  const isAuthData = useSelector(getUserAuthData)
  
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  },[])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if(isAuthData){
    return (
      <header className={classNames(cls.navbar, {}, [className || ''])}>
      <Button
        className={cls.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onLogout}
        >
        {t('Выйти')}
      </Button>
    </header>
    )
  }


  return (
    <div className={classNames(cls.navbar, {}, [className || ''])}>
      <Button
        className={cls.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
        >
        {t('Войти')}
      </Button>
      {isAuthModal && 
        <LoginModal
        onClose={onCloseModal}
        isOpen = {isAuthModal}
        />
        }
    </div>

  )
})
