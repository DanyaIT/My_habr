import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/Page';

interface PageErrorProps{
    className?: string;
}

export const PageError:FC<PageErrorProps> = ({className}) => {
    
    const {t} = useTranslation()

    const onReloadPge = () => {
        location.reload()
    }

    return(
        <Page className={classNames(cls.PageError, {}, [className || ''])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button onClick={onReloadPge}>{t('Обновить страницу')}</Button>
        </Page>
    )
}

