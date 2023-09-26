import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { ArticleType } from 'entities/Article';


export interface TabsItem<T extends string> {
   value: T,
   content: React.ReactNode,
}

interface TabsProps<T extends string>{
   className?: string;
   value: T,
   tabs: TabsItem<ArticleType>[],
   onChangeTab: (tab:TabsItem<T>) => void,
   children?: React.ReactNode,
}

export const Tabs = <T extends string>(props:TabsProps<T>) => {
   const { className, tabs, value, onChangeTab } = props;
   const { t } = useTranslation()

   const onClickHandle = useCallback((tab:TabsItem<ArticleType>) => {
      return () => {
         onChangeTab(tab as TabsItem<T>)
      }
   }, [onChangeTab])

   return (
      <div className={classNames(cls.Tabs, {}, [className])}>
         {tabs.map(item => (
            <Card
            onClick={onClickHandle(item)}
            theme={item.value === value? CardTheme.NORMAL : CardTheme.OUTLINE}
            key={item.value}
            >
               {item.content}
            </Card>
         ))}
      </div>
   );
}