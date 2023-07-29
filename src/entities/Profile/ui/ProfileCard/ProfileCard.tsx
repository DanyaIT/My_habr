import { FC } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { AlignText, Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'Page/ProfilePage';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Currency } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Country } from 'entities/Country/model/type';





interface ProfileCardProps {
    className?: string,
    data?: Profile,
    error?: string,
    readonly?: boolean,
    isLoading?: boolean,
    onChangeFirstName?: (value?: string) => void,
    onChangeLastName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (value: Currency) => void,
    onChangeCountry?: (value: Country) => void

}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        onChangeUsername
    } = props



    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={AlignText.CENTER}
                    theme={TextTheme.ERROR}
                    title={t("Произошла непредвиденная ошибка") as string}
                    text={t("Обновите страницу") as string}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.Editing]: !readonly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.AvatarWrapper}>
                        <Avatar
                            size={200}
                            src={data.avatar}
                            alt=''
                        />
                    </div>
                )}
                <Input
                    className={cls.input}
                    placeholder={t("Укажите имя") as string}
                    value={data?.first}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите фамилию") as string}
                    value={data?.lastname}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите возраст") as string}
                    value={data?.age}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите город") as string}
                    value={data?.city}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите псевдоним") as string}
                    value={data?.username}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    className={cls.input}
                    placeholder={t("Укажите ссылку на аватар") as string}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                 <CountrySelect
                    className={cls.input}
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    )
}