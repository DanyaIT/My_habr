
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className || ''])}>
      <Button
        className={cls.links}
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onToggleModal}
        >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>Если у вас ничего не работает, сделайте это, измените версию,
        но сначала удалите зависимость react-router-dom: 6.something из папки package.json, а затем
        Удалите предыдущую версию- npm uninstall react-router-dom 2. Установите более старую версию-
        npm install react-router-dom@5.0.0</Modal>
    </div>

  )
}
