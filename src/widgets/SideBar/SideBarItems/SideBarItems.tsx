import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './SideBarItems.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SideBarItemsType } from '../model/items';
import { classNames } from 'shared/lib/classNames/classNames';

interface SideBarItemsProps {
    item: SideBarItemsType,
    collapsed: boolean,
}

export const SideBarItems: FC<SideBarItemsProps> = memo(({item, collapsed}) => {
    const { t } = useTranslation()
    return (
            <AppLink
                to={item.path}
                theme={AppLinkTheme.PRIMARY}
                className = {classNames(cls.item, {[cls.collapsed]: collapsed})}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>

    )
})