import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ProfileCard, } from 'entities/Profile';
import { profileAction, profileReducer } from '../model/slice/ProfileSlice';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';

import { useSelector } from 'react-redux';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileDataForm } from '../model/selectors/getProfileDataForm/getProfileDataForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/countrySelect';
import { getProfileValidateData } from '../model/selectors/getProfileValidateData/getProfileValidateData';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileData } from '../model/types/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';



const reducers: ReducersList = {
    profile: profileReducer
}
interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileDataForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateData = useSelector(getProfileValidateData)
    const { t } = useTranslation('profile')
    const { id } = useParams<{id:string}>()
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ProfilePageHeader />
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
        </DynamicModuleLoader>
    )
}

export default ProfilePage