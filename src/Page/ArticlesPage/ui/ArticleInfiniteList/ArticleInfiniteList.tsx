import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleInfiniteList.module.scss';
import { useSelector } from 'react-redux';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/getArticlePageState/ArticleViewSelector';
import { Text } from 'shared/ui/Text/Text';
import { getArticle } from '../../model/slice/ArticlePageSlice';
import { ArticleList } from 'entities/Article';

interface ArticleInfiniteListProps {
   className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
   const { className } = props;
   const {t} = useTranslation('/articles')
   const articles = useSelector(getArticle.selectAll)
   const view = useSelector(getArticlePageView)
   const isLoading = useSelector(getArticlePageIsLoading)
   const error = useSelector(getArticlePageError)

   if(error) {
      return (
      <Text title={t('Произошла ошибка при загрузке статьи') as string}/>
      )
   }

   return (
      <ArticleList
         className = {className}
         view={view}
         articles={articles}
         isLoading={isLoading} />
   );
})