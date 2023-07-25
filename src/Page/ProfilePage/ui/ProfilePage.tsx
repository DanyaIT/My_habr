import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/ProfileSlice';


const reducers:ReducersList =  {
    profile : profileReducer
}
interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers}  removeAfterUnmount = {true}>
            <div className={classNames('', {}, [className || ''])}>
                {t("Страница профиля")}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage