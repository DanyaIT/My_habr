
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {Text} from '../../../shared/ui/Text/Text'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

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
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isManager || isAdmin;
  
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
      <Text 
      className={cls.Title}
      title = {t('Хабр') as string}
      />
      <div className={cls.links}>
      <AppLink
      to={RoutePath.artilcle_create}
      >
        {t('Создать новую статью')}
      </AppLink>
      <Dropdown
      className={cls.DropDown}
      direction='bottom left'
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админ панель'),
          href: RoutePath.admin_panel,
        }] : []),

        {
        content: t('Выйти'), 
        onClick: onLogout
        },
        {
          content: t('Профиль'),
          href: RoutePath.profile + isAuthData.id
        },
      ]}
      trigger = {<Avatar size={40} src={isAuthData.avatar} circle/>}
      />
      </div>
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
