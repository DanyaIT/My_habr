import { ArticleType } from 'entities/Article';
import {  useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';



interface ArticleTypeTabsProps<T extends string> {
   className?: string;
   value:T;
   onChangeTab: (type:TabsItem<T>) => void;
}

export const ArticleTypeTabs = <T extends string>(props:ArticleTypeTabsProps<T>) => {
   const { className,value, onChangeTab } = props;
   const { t } = useTranslation()

   const tabsType = useMemo<TabsItem<ArticleType>[]>(() => [
      {
         value: ArticleType.ALL,
         content: t('Всё')
      },
      {
         value: ArticleType.IT,
         content: t('Айти')
      },
      {
         value: ArticleType.POLITICS,
         content: t('Политика')
      },
      {
         value: ArticleType.SCIENCE,
         content: t('Наука')
      },
   ], [t])



   return (
      <Tabs
         className={classNames('', {}, [className])}
         tabs={tabsType}
         value={value}
         onChangeTab={onChangeTab}
      />
  
   );
}