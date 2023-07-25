import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

const {t} = useTranslation()

    return (
        <div className={classNames('', {}, [className || ''])}>
            {t("Страница профиля")}
        </div>
    )
}

export default ProfilePage