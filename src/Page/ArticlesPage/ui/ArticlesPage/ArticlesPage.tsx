import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticlesView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageAction, articlePageReducer, getArticle } from '../../model/slice/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/getArticlePageState/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlePage } from '../../model/service/initArticlePage/initArticlePage';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('/articles')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticle.selectAll)
  const view = useSelector(getArticlePageView)
  const isLoading = useSelector(getArticlePageIsLoading)

  const reducers: ReducersList = {
    articlePage: articlePageReducer
  }
  const onViewClick = useCallback((view: ArticlesView) => {
    dispatch(articlePageAction.setView(view))
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
   initArticlePage()
  })



return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount = {false}>
    <Page
      onScrollEnd={onLoadNextPage}
      className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleViewSelector view={view} onViewClick={onViewClick} />
      <ArticleList
        view={view}
        articles={articles}
        isLoading = {isLoading}/>
    </Page>
  </DynamicModuleLoader>
);
}


export default memo(ArticlesPage)