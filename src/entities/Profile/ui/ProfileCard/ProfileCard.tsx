import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const { t } = useTranslation('profile')

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={classNames(cls.Header, {}, [])}>
                <Text title={t('Профиль') as string}></Text>
                <Button
                    className={cls.btn}
                    theme={ThemeButton.OUTLINE}
                >{t("Редактировать")}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    placeholder={t("Укажите ваше имя") as string }
                    value={data?.first}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите вашу фамлию") as string}
                    value={data?.lastname}
                />
            </div>
        </div>
    )
}