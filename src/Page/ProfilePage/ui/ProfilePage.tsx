import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import {Text} from 'shared/ui/Text/Text'

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();


    if (!id) {
        return <Text title={t('Профиль не найден') as string} />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage