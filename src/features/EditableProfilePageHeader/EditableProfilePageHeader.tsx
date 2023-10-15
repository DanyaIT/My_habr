import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'features/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from '../EditableProfileCard/model/selectors/getProfileData/getProfileData'
import { profileAction } from '../EditableProfileCard/model/slice/ProfileSlice';
import { updateProfileData } from '../EditableProfileCard/model/service/updateProfileData/updateProfileData';
import {Text} from 'shared/ui/Text/Text';

interface EditableProfilePageHeaderProps {
   className?: string;
}

export const EditableProfilePageHeader: FC<EditableProfilePageHeaderProps> = memo((props) => {
   const { className } = props;
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
})