import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelectors.module.scss';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

interface ArticleSortSelectorsProps {
   className?: string;
   order?: SortOrder | '',
   sort?: ArticleSortField | '',
   onChangeSort: (newSort:ArticleSortField) => void;
   onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelectors: FC<ArticleSortSelectorsProps> = memo((props) => {
   const { className, order, sort, onChangeSort,onChangeOrder } = props;
   const { t } = useTranslation()

   const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
      {
         value: 'asc',
         content: t('возрастанию')
      },
      {
         value: 'desc',
         content: t('убыванию')
      }
   ],[t])

   const sortFilteOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
      {
         value: ArticleSortField.CREATED,
         content: t('дате создания'),
      },
      {
         value: ArticleSortField.VIEW,
         content: t('просмотрам'),
      },
      {
         value: ArticleSortField.TITLE,
         content: t('названию'),
      },
   ],[t])


   return (
      <div className={classNames(cls.ArticleSortSelectors, {}, [className])}>
         <Select 
         onChange={onChangeSort} 
         value = {sort} 
         options = {sortFilteOptions} 
         label={t('Сортировать по') ?? ''}
         />
         <Select 
         className={cls.Order}
         onChange={onChangeOrder} 
         value = {order} 
         options={orderOptions} 
         label={t('По') ?? ''}
         />
      </div>
   );
})