import { FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData, getProfileReadonly, profileAction, updateProfileData } from '../../index';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';


interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const readOnly = useSelector(getProfileReadonly)
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadonly(false))
    }, [dispatch])

    const onCancelForm = useCallback(() => {
        dispatch(profileAction.resetProfile())
    }, [dispatch])

    
    const onSaveForm = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])


    return (
        <HStack
        max
        justify='between'
        className={classNames('', {}, [className])}>
            <Text title={t('Профиль') as string}></Text>
            {canEdit && (
                <HStack gap='8'>
                {readOnly?
                    (<Button
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                    >{t("Редактировать")}
                    </Button>)
                    : (
                    <>
                        <Button
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={onCancelForm}
                        >
                            {t("Отменить")}</Button>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            onClick={onSaveForm}
                        >
                            {t("Сохранить")}
                            </Button>
                     </>)
                }
                </HStack>
            )}

        </HStack>

    )
}