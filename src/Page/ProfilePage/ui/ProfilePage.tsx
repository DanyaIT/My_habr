import { FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ProfileCard,} from 'entities/Profile';
import { profileAction, profileReducer } from '../model/slice/ProfileSlice';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';

import { useSelector } from 'react-redux';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly';
import { getProfileDataForm } from '../model/selectors/getProfileDataForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/type';



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

    const { t } = useTranslation('profile')


    useEffect(() => {

        dispatch(fetchProfileData())

    }, [dispatch])

    const onChangeFirstName = useCallback ((value?: string) => {
        dispatch(profileAction.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastName = useCallback((value?:string) => {
        dispatch(profileAction.updateProfile({lastname: value || ''}))
    }, [dispatch])
    
    const onChangeAge = useCallback((value?:string) => {
        const regex = /^[0-9]*\d$/
        if(!regex.test(value as any) && value !== ''){
           alert(t('Укажите числовое значение'))
        }
        dispatch(profileAction.updateProfile({age: Number(value) || 0}))
    }, [dispatch])

    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileAction.updateProfile({city: value || ''}))
    }, [dispatch])
    
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileAction.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((value:Currency) => {
        dispatch(profileAction.updateProfile({currency: value}))
    }, [dispatch])

    const onChangeCountry = useCallback((value:Country) => {
        dispatch(profileAction.updateProfile({country: value}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ProfilePageHeader/>
            <ProfileCard 
            data={formData}
            error = {error}
            isLoading = {isLoading}
            onChangeFirstName = {onChangeFirstName}
            onChangeLastName = {onChangeLastName}
            onChangeAge = {onChangeAge}
            onChangeCity = {onChangeCity}
            onChangeAvatar = {onChangeAvatar}
            onChangeUsername = {onChangeUsername}
            onChangeCurrency = {onChangeCurrency}
            onChangeCountry = {onChangeCountry}
            readonly = {readonly}
            />
        </DynamicModuleLoader>
    )
}

export default ProfilePage