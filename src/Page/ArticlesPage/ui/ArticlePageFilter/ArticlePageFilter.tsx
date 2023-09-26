import { FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePageFilter.module.scss';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useSelector } from 'react-redux';
import { getArticleOrder, getArticlePageView, getArticleSearch, getArticleSort, getArticleType } from '../../model/selectors/getArticlePageState/ArticleViewSelector';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entities/Article';
import { articlePageAction } from '../../model/slice/ArticlePageSlice';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelectors } from 'features/ArticleSortSelectors/ArticleSortSelectors';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { fetchArticles } from 'Page/ArticlesPage/model/service/fetchArticles/fetchArticles';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs/ArticleTypeTabs';

interface ArticlePageFilterProps {
   className?: string;
}

export const ArticlePageFilter: FC<ArticlePageFilterProps> = memo((props) => {
   const { className } = props;
   const dispatch = useAppDispatch()
   const view = useSelector(getArticlePageView)
   const { t } = useTranslation('/articles')
   const order = useSelector(getArticleOrder)
   const sort = useSelector(getArticleSort)
   const search = useSelector(getArticleSearch)
   const type = useSelector(getArticleType)

   
   const fetchData = useCallback(() => {
      dispatch(fetchArticles({ repalce: true }))
   },[dispatch])
   
   const debounceFetchData = useDebounce(fetchData, 1000)
   
   const onViewClick = useCallback((view: ArticlesView) => {
      dispatch(articlePageAction.setView(view))
   }, [dispatch])

   const onChangeSort = useCallback((newSort: ArticleSortField) => {
      dispatch(articlePageAction.setSort(newSort))
      dispatch(articlePageAction.setPage(1))
      fetchData()
   }, [dispatch, fetchData])

   const onChangeOrder = useCallback((newOrder: SortOrder) => {
      dispatch(articlePageAction.setOrder(newOrder))
      dispatch(articlePageAction.setPage(1))
      fetchData()
   }, [dispatch, fetchData])

   const onChangeSearch = useCallback((search: string) => {
      dispatch(articlePageAction.setSearch(search))
      dispatch(articlePageAction.setPage(1))
      debounceFetchData()
   }, [dispatch, debounceFetchData()])

   const onChangeTab = useCallback((type: TabsItem<ArticleType>) => {
      dispatch(articlePageAction.setType(type.value))
      dispatch(articlePageAction.setPage(1))
      fetchData()
   }, [dispatch])

   return (
      <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
         <div className={cls.Select}>
            <ArticleSortSelectors
               order={order}
               sort={sort}
               onChangeOrder={onChangeOrder}
               onChangeSort={onChangeSort}
            />
            <ArticleViewSelector view={view} onViewClick={onViewClick} />
         </div>
         <Card className={cls.InputWrapper}>
            <Input
               value={search}
               onChange={onChangeSearch}
               placeholder={t("Поиск")}
            />
         </Card>
         <ArticleTypeTabs
         value={type}
         onChangeTab={onChangeTab}
         />
      </div>
   );
})