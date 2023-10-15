
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { FC, memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ProfileCard, } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileData } from '../model/types/profile';
import { getProfileDataForm } from '../model/selectors/getProfileDataForm/getProfileDataForm';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateData } from '../model/selectors/getProfileValidateData/getProfileValidateData';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';
import { profileAction, profileReducer } from '../model/slice/ProfileSlice';
import { Country } from 'entities/Country/model/types/countrySelect';
import { Currency } from 'entities/Currency';
import {Text, TextTheme} from 'shared/ui/Text/Text'
import { EditableProfilePageHeader } from 'features/EditableProfilePageHeader/EditableProfilePageHeader';

interface EditableProfileCardProps {
   className?: string;
   id: string;
}

const reducers: ReducersList = {
   profile: profileReducer
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {

   const {className, id} = props;

   const dispatch = useAppDispatch();
   const formData = useSelector(getProfileDataForm)
   const isLoading = useSelector(getProfileIsLoading)
   const error = useSelector(getProfileError)
   const readonly = useSelector(getProfileReadonly)
   const validateData = useSelector(getProfileValidateData)
   const { t } = useTranslation('profile')

   const valodateProfileErrors = {
      [ValidateProfileData.INCORRECT_AGE]: t('Укажите корректный возраст'),
      [ValidateProfileData.INCORRECT_CITY]: t('Укажите существующий город'),
      [ValidateProfileData.INCORRECT_COUNTRY]: t('Укажите существующий страну'),
      [ValidateProfileData.INCORRECT_DATA]: t('Укажите все данные о себе'),
      [ValidateProfileData.INCORRECT_SERVER]: t('Ошибка на стороне сервера'),
      [ValidateProfileData.INCORRECT_USER_DATA]: t('Укажите верное имя и фамилию'),
   }

   useInitialEffect(() => {
      if (id) {
         dispatch(fetchProfileData(id))
      }

   })

   const onChangeFirstName = useCallback((value?: string) => {
      dispatch(profileAction.updateProfile({ first: value || '' }))
   }, [dispatch])

   const onChangeLastName = useCallback((value?: string) => {
      dispatch(profileAction.updateProfile({ lastname: value || '' }))
   }, [dispatch])

   const onChangeAge = useCallback((value?: string) => {
      const regex = /^[0-9]*\d$/
      if (!regex.test(value as any) && value !== '') {
         alert(t('Укажите числовое значение'))
      }
      dispatch(profileAction.updateProfile({ age: Number(value) || 0 }))
   }, [dispatch])

   const onChangeCity = useCallback((value?: string) => {
      dispatch(profileAction.updateProfile({ city: value || '' }))
   }, [dispatch])

   const onChangeUsername = useCallback((value?: string) => {
      dispatch(profileAction.updateProfile({ username: value || '' }))
   }, [dispatch])

   const onChangeAvatar = useCallback((value?: string) => {
      dispatch(profileAction.updateProfile({ avatar: value || '' }))
   }, [dispatch])

   const onChangeCurrency = useCallback((value: Currency) => {
      dispatch(profileAction.updateProfile({ currency: value }))
   }, [dispatch])

   const onChangeCountry = useCallback((value: Country) => {
      dispatch(profileAction.updateProfile({ country: value }))
   }, [dispatch])

   return (
      <DynamicModuleLoader reducers={reducers}>
      <VStack 
      className={classNames(cls.EditableProfileCard, {}, [className])}
      gap='16' 
      max
      >
      <EditableProfilePageHeader/>
      {validateData &&
            validateData.map(item => (
               <Text
                  text={valodateProfileErrors[item]}
                  key={item}
                  theme={TextTheme.ERROR}
               />
            ))
         }
         <ProfileCard
            data={formData}
            error={error}
            isLoading={isLoading}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeUsername={onChangeUsername}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readonly={readonly}
         />
      </VStack>
      </DynamicModuleLoader>
   );
})