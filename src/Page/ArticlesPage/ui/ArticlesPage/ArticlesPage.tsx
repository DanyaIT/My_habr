import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { Article, ArticleList, ArticlesView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageAction, articlePageReducer, getArticle } from '../../model/slice/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticles } from 'Page/ArticlesPage/model/service/fetchArticles/fetchArticles';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { getArticlePageView } from 'Page/ArticlesPage/model/selectors/getArticlePageState/ArticleViewSelector';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('/articles')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticle.selectAll)
  const view = useSelector(getArticlePageView)

const reducers: ReducersList = {
  articlePage: articlePageReducer
}

useInitialEffect(() => {
  dispatch(fetchArticles())
  dispatch(articlePageAction.initView())
})

const onViewClick = useCallback((view:ArticlesView) => {
  dispatch(articlePageAction.setView(view))
}, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onViewClick}/>
        <ArticleList
          view={view}
          articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
}


export default memo(ArticlesPage)