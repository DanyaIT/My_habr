import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, getArticleDetailsData } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer, getArticle } from '../../model/slice/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/getArticlePageState/ArticleViewSelector';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlePage } from '../../model/service/initArticlePage/initArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articlePage: articlePageReducer
  
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams();
  

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
   dispatch(initArticlePage(searchParams))
  })

return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount = {false}>
    <Page
      onScrollEnd={onLoadNextPage}
      className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticlePageFilter className={cls.ArticlePageFilter}/>
      <ArticleInfiniteList/>
    </Page>
  </DynamicModuleLoader>
);
}


export default memo(ArticlesPage)