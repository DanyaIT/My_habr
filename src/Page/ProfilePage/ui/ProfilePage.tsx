import { FC, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';



const reducers: ReducersList = {
    profile: profileReducer
}
interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

    const dispatch = useAppDispatch()

    const { t } = useTranslation()


    useEffect(() => {

        dispatch(fetchProfileData())

    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <ProfileCard />
        </DynamicModuleLoader>
    )
}

export default ProfilePage