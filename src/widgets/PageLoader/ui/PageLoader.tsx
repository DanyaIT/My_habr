import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader';
import { Page } from 'widgets/Page/Page';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <Page className={classNames(cls.PageLoader, {}, [className || ''])}>
            <Loader/>
        </Page>
    )
}